import 'dotenv/config';

import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

const app = express();
const PORT = process.env.PORT || 5001;

// middlesware
app.use(express.json()); //this middleware to parse json bodies, allows access to req.body
app.use(rateLimiter);

//custom middleware for logging
// app.use((req, res,next) => {
//   console.log(`Request method is ${req.method} and request url is ${req.url}`);
//   next();
// })

app.use('/api/notes', notesRoutes);

connectDB().then(() => {

  app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
  });
  
})

