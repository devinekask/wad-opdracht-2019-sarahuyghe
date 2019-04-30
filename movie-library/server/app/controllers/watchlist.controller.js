const Watchlist = require('../models/watchlist.model.js');

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(500).send({err: 'title can not be empty'});
  }

  const movie = new Watchlist({
    title: req.body.title,
    movieId: req.body.movieId,
    poster: req.body.poster
  });

  movie
    .save()
    .then(movie => res.send(movie))
    .catch(err => {
      res.status(500).send({error: err.movie || 'Error'});
    });
};

exports.findAll = async (req, res) => {
  try {
    const movies = await Watchlist.find();
    res.send(movies);
  } catch (err) {
    res.status(500).send({err: err.movie || 'Error'});
  }
};

exports.update = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send('title mag niet leeg zijn');
  }

  try {
    const movie = await Watchlist.findByIdAndUpdate(
      req.params.movieId,
      console.log(movie)
      // {
      //   title: req.body.title,
      //   authorId: req.body.authorId
      // },
      // {
      //   new: true
      // }
    );

    if (!movie) {
      return res.status(404).send('No book found');
    }
    res.send(movie);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(417).send('Geen geldig ID');
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const movie = await Watchlist.findByIdAndRemove(req.params.movieId);
    if (!movie) {
      return res.status(404).send('No movie found');
    }
    res.send(movie);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(417).send('Geen geldig ID');
    }
    return res.status(500).send(err);
  }
};
