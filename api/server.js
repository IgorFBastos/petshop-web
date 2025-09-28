import express from 'express';
import connectDB from './db/connectDB.js';
import globalRouter from './routes/globalRouter.js';


const app = express();
const PORT = process.env.PORT || 4587;



app.use(express.json());
app.use(express.static("../public"));

app.use("/api", globalRouter);


await connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


