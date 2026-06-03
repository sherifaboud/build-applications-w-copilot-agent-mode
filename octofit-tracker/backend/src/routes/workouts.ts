import { Router } from 'express';
import { Workout } from '../models';

const workoutsRouter = Router();

workoutsRouter.get('/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ difficulty: 1, title: 1 }).lean();
    response.json({
      resource: 'workouts',
      count: workouts.length,
      items: workouts,
    });
  } catch (error) {
    next(error);
  }
});

export default workoutsRouter;