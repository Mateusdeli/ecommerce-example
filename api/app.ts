import express, { json } from 'express'
import cors from 'cors'
import { ExpressAdapter, createBullBoard, BullMQAdapter } from '@bull-board/express';
import 'dotenv/config'
import * as routes from './src/routes'
import './queue'
import queue from './src/libs/queue';

const app = express()

const port = process.env.PORT || 8000

app.use(json())
app.use(cors())

app.get('/', (req, res) => res.status(200).send({ message: 'hello world!' }))

Object.values(routes.default).forEach(({ name, router}) => app.use(name, router))

app.use('/admin/queues', buildBullBoard());

app.listen(port, () => {
    console.log(`[Ecommerce Server] listen in port ${port}`);
    console.log(`Queue UI, open http://localhost:${port}/admin/queues`);
})

function buildBullBoard() {
    const serverAdapter = new ExpressAdapter();
    serverAdapter.setBasePath('/admin/queues');

    createBullBoard({
        queues: queue.queues.map(queue => new BullMQAdapter(queue.provider)),
        serverAdapter: serverAdapter,
    });

    return serverAdapter.getRouter()
}