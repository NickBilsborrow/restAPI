const sql = require("../db/connection");
const { QueryTypes } = require("sequelize");



exports.getMovie = (req, res) => {
  try {
    const movie = {
      title: "nick is great",
      watched: true,
      user: "",
    };

    res.status(200).send({ movie: movie, message: "movie successfully found" });
  } catch (error) {
    res.status(500).send({ message: "no movie found" });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = [
      req.body.title,
      req.body.username,
      req.body.pass,
      req.body.rating,
      req.body.watched,
    ];
    
    const text =
      "INSERT INTO movies title as( :title), userid as (SELECT id FROM movieusers WHERE username = :username AND pass = :pass), rating as( :rating) , watched as(:watched) RETURNING *";
    await sql.query(text, {
      replacements: {
        title: req.body.title,
        username: req.body.user,
        pass: req.body.pass,
        rating: req.body.rating,
        watched: req.body.watched
      },
      type: QueryTypes.INSERT,
    });

    res.status(200).send({ movie: movie, message: "movie successfully created" });
  } catch (error) {
      console.log(error)
    res.status(500).send({ error:error, message: "no movie created" });
  }
};

exports.editMovie = (req, res) => {
  try {
    const movie = {
      title: req.body.title,
      watched: true,
      user: req.body.user,
    };

    res
      .status(200)
      .send({ movie: movie, message: "movie successfully edited" });
  } catch (error) {
    res.status(500).send({ message: "no movie edited" });
  }
};
