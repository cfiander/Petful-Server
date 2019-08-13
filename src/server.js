require('dotenv').config()
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { PORT, CLIENT_ORIGIN } = require('./config');
const morgan = require('morgan');
const usersRouter = require(`./users/usersRouter`)
const dogRouter = require('./dogs/dogRouter');
const catRouter = require('./cats/catRouter');
const adoptedrouter = require('./adopted/adoptedRouter')
const app = express();
const morganOption = (process.env.NODE_ENV === 'production') // For server side logs
  ? 'tiny'
  : 'common';
  
app.use(cors({
    origin: CLIENT_ORIGIN
  }));
app.use(helmet());
app.use(morgan(morganOption));
app.use(express.json());


app.get(`/`, (req, res) => {
  res.send("Hello, world!")
})

app.use('/api/users', usersRouter)
app.use('/api/cats', catRouter);
app.use('/api/dogs', dogRouter);
app.use('/api/adopted', adoptedrouter)

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    });
  });

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

