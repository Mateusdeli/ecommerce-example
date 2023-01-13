import { Queue, Worker } from 'bullmq'
import redis from '../configs/redis'
import * as jobs from '../jobs'

const connection = {
    host: redis.host,
    port: Number(redis.port)
}

const queues = Object.values(jobs).map((job) => ({
    provider: new Queue(job.name, { connection }),
    name: job.name,
    handle: job.handle,
    options: job.options
}))

const add = async (name: string, data: unknown) => {
    const queue = queues.find(q => q.name === name)
    return await queue?.provider.add(name, data, {
        ...queue.options
    })
}

const process = () => {
    return queues.forEach(queue => new Worker(queue.name, queue.handle, { connection }))
}

export default {
    queues,
    add,
    process
}