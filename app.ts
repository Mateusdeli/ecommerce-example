import express, { json } from 'express'
import { ExpressAdapter, createBullBoard, BullAdapter, BullMQAdapter } from '@bull-board/express';
import 'dotenv/config'
import routes from './src/routes'
import './queue'
import queue from './src/libs/queue';

const app = express()

const port = process.env.PORT || 3000

app.use(json())
app.use(routes)

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
    queues: queue.queues.map(queue => new BullMQAdapter(queue.provider)),
    serverAdapter: serverAdapter,
});

app.use('/admin/queues', serverAdapter.getRouter());

app.listen(port, () => {
    console.log(`Server started... Port: ${port}`);
    console.log(`Queue UI, open http://localhost:${port}/admin/queues`);
})