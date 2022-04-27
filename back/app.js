const express = require('express')
const app = express()
const port = 3200

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/playlists', (req, res) => {
  // read data and response
  res.send('data');
})

app.get('/playlists/:playlistId', (req, res) => {
  const playlistId = req.params.playlistId;
  // read data of given playlist id and response
  res.send('data');
})

app.post('/playlists', (req, res) => {
  // data processing and store
  res.send('success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})