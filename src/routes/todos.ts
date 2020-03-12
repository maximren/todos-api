import { Request, Response, Router } from 'express';

import Todo from '../models/Todo';
import { ITodo } from '../types/todos.interface';

const router: Router = Router();

router.get(
  '/todos',
  async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const todos: ITodo[] = await Todo.find();
      res.json(todos);
    } catch (error) {
      res.json(error);
    }
  },
);

router.post(
  '/todos',
  async (req: Request, res: Response): Promise<Response | void> => {
    const todo = new Todo({
      task: req.body.task,
    });

    try {
      const newTodo: ITodo = await todo.save();
      res.json(newTodo);
    } catch (error) {
      res.json(error);
    }
  },
);

router.patch(
  '/todos/update_status/:id',
  async (req: Request, res: Response) => {
    try {
      const changeIsActive = await Todo.updateOne(
        { id: req.params.id },
        {
          $set: {
            isActive: req.body.isActive,
          },
        },
      );
      res.json(changeIsActive);
    } catch (error) {
      res.json(error);
    }
  },
);

router.patch(
  '/todos/:id',
  async (req: Request, res: Response) => {
    try {
      const changeTask = await Todo.updateOne(
        { id: req.params.id },
        {
          $set: {
            task: req.body.task,
          },
        },
      );
      res.json(changeTask);
    } catch (error) {
      res.json(error);
    }
  },
);

router.delete('/todos/:id', async (req: Request, res: Response) => {
  try {
    const deletedTodo = await Todo.deleteOne({ id: req.params.id });
    res.json(deletedTodo);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
