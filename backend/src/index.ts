import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import deviceRouter from './routes/device.router';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/device', deviceRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
