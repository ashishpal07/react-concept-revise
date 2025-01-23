import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDatabase } from './configs/database.config';

connectDatabase();

// importing routes
import userRoutes from './routes/user.route';
import contentRoutes from './routes/content.route';
import linkRoutes from './routes/link.route';
import tagRoutes from './routes/tag.route';

const app = express();
app.use(express.json());

// use routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/contents', contentRoutes);
app.use('/api/v1/links', linkRoutes);
app.use('/api/v1/tags', tagRoutes);

const port = process.env.PORT || 4000;

app.listen(port, (err) => {
  if (err) {
    console.error("Not able to start the server", err.message);
    return;
  }
  console.log(`Example app listening at http://localhost:${port}`);
});
