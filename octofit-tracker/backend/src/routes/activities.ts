import { Router } from 'express';
import { Activity } from '../models';

const activitiesRouter = Router();

activitiesRouter.get('/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().sort({ activityDate: -1 }).lean();
    response.json({
      resource: 'activities',
      count: activities.length,
      items: activities,
    });
  } catch (error) {
    next(error);
  }
});

export default activitiesRouter;