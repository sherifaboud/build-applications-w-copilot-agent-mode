import { Router } from 'express';
import { LeaderboardEntry } from '../models';

const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_request, response, next) => {
  try {
    const leaderboard = await LeaderboardEntry.find().sort({ rank: 1 }).lean();
    response.json({
      resource: 'leaderboard',
      count: leaderboard.length,
      items: leaderboard,
    });
  } catch (error) {
    next(error);
  }
});

export default leaderboardRouter;