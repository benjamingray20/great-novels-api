const express = require('express')
const { getAllAuthors, getAuthorByInput, } = require('./controllers/authors')
const { getAllGenres, getGenresById } = require('./controllers/genres')
const { getAllNovels, getNovelsByInput } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:input', getAuthorByInput)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenresById)

app.get('/novels', getAllNovels)
app.get('/novels/:input', getNovelsByInput)



app.all('*', (request, respone) => {
  return respone.status(404).send('route not found')
})

app.listen(1111, () => {
  console.log('Listening on port 1111...') // eslint-disable-line no-console
})
