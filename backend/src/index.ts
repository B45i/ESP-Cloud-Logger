import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import connectDB from './config/mongodb';

import deviceRouter from './routes/device.router';
import authRouter from './routes/auth.router';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/device', deviceRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
