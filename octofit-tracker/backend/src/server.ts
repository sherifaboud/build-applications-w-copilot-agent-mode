import cors from 'cors';
import express from 'express';
import { connectToDatabase, mongoUri } from './config/database';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import teamsRouter from './routes/teams';
import usersRouter from './routes/users';
import workoutsRouter from './routes/workouts';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;
const frontendBaseUrl = codespaceName
  ? `https://${codespaceName}-5173.app.github.dev`
  : 'http://localhost:5173';

app.use(cors({ origin: frontendBaseUrl }));
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
    await connectToDatabase();
    console.log(`MongoDB connected at ${mongoUri}`);
  } catch (error) {
    console.warn('MongoDB connection unavailable at startup.', error);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit backend listening at ${apiBaseUrl}`);
  });
}

void start();