import { Router } from 'express';
import { Team } from '../models';

const teamsRouter = Router();

teamsRouter.get('/', async (_request, response, next) => {
  try {
    const teams = await Team.find().sort({ name: 1 }).lean();
    response.json({
      resource: 'teams',
      count: teams.length,
      items: teams,
    });
  } catch (error) {
    next(error);
  }
});

export default teamsRouter;