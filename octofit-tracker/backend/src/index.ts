import express from 'express';
import mongoose from 'mongoose';
import { apiBaseUrl, port } from './config/apiBaseUrl';
import { databaseName, mongoUri } from './config/database';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import teamsRouter from './routes/teams';
import usersRouter from './routes/users';
import workoutsRouter from './routes/workouts';

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    apiPort: port,
    apiBaseUrl,
    mongoUri,
  });
});

async function start() {
  try {
    await mongoose.connect(mongoUri, {
      dbName: databaseName,
    });
    console.log(`MongoDB connected at ${mongoUri}`);
  } catch (error) {
    console.warn('MongoDB connection unavailable at startup.', error);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit backend listening at ${apiBaseUrl}`);
  });
}

void start();