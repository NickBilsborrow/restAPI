const { Router } = require('express');
const {getMovie,createMovie,editMovie} = require('../controllers/movie.controllers');
const movieRouter = Router();

movieRouter.get("/movies", getMovie);
movieRouter.post("/movies", createMovie);
movieRouter.put("/movies", editMovie);

module.exports = movieRouter