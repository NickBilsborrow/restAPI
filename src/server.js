require("./db/connection");
const express = require("express");
const app = express();
const port = process.env.port || 5000;
const userRouter = require ("./routes/user.route");
const movieRouter = require ("./routes/movie.route");

app.use(express.json());
app.use(userRouter);
app.use(movieRouter)

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

