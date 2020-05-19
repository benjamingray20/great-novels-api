const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.authors.findAll()

  return response.send(authors)
}

const getAuthorByInput = async (request, response) => {
  const { input } = request.params
  const authors = await models.authors.findOne({
    where: {
      [models.Op.or]: [
        { id: input },
        { nameLast: { [models.Op.like]: `%${input}%` } }
      ]
    },
    include: [
      { model: models.novels, include: { model: models.genres } }
    ]
  })

  return authors
    ? response.send(authors)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorByInput }
