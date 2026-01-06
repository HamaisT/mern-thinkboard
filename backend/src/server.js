import 'dotenv/config';

import express from 'express';
import cors from 'cors';
// import path from 'path'

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

const app = express();
const PORT = process.env.PORT || 5001;
// const __dirname = path.resolve() //sourse of backend

// middlesware

// only execute in development mode
// if(process.env.Node_ENV !== 'production') { 
  app.use(cors({
  origin: 'http://localhost:5173',
})
);
// }

app.use(express.json()); //this middleware to parse json bodies, allows access to req.body
app.use(rateLimiter);

// if (process.env.NODE_ENV === "production") {
//   app.use(rateLimiter);
// }


//custom middleware for logging
// app.use((req, res,next) => {
//   console.log(`Request method is ${req.method} and request url is ${req.url}`);
//   next();
// })

app.use('/api/notes', notesRoutes);

//only in production mode
// // if(process.env.Node_ENV === 'production') { 
//   app.use(express.static(path.join(__dirname, "../frontend/dist"))) //server optimized react app as static asset

// app.get("*", (rep,res) => {   // to serve app also on localhost:5001 other than /api/notes
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html" )); //index.html to serve app
// });
// // }

connectDB().then(() => {

  app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
  });
  
})

