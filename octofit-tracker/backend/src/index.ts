import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    apiPort: port,
    mongoUri,
  });
});

async function start() {
  try {
    await mongoose.connect(mongoUri, {
      dbName: 'octofit_db',
    });
    console.log(`MongoDB connected at ${mongoUri}`);
  } catch (error) {
    console.warn('MongoDB connection unavailable at startup.', error);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit backend listening on port ${port}`);
  });
}

void start();