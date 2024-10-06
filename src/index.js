const express = require('express')
const app = express()
const port = 3000

const userRoutes = require('./routes/users.js');

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chedy', (req, res) => {
  res.json({
    'nama': 'chedy',
    'prodi': 'Informatika'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
