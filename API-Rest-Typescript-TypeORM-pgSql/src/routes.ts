import { Router, Request, Response } from 'express';

import { getTasks, getTask, saveTasks, updateTask, finishedTask, removeTask } from './controller/TasksController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World!' });
});

routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.post('/tasks', saveTasks);
routes.put('/tasks/:id', updateTask);
routes.patch('/tasks/:id', finishedTask);
routes.delete('/tasks/:id', removeTask);

export default routes;
