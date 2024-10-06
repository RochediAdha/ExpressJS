require('dotenv').config()
const PORT = process.env.PORT || 8080

const express = require('express')
const app = express()

const userRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');

app.use (middlewareLogRequest);
app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
