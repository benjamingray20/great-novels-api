const models = require('../models')

const getAllNovels = async (request, response) => {
  const genres = await models.novels.findAll({
    include: [
      { model: models.authors },
      { model: models.genres }
    ]
  })

  return response.send(genres)
}

const getNovelsByInput = async (request, response) => {
  const { input } = request.params

  const novels = await models.novels.findOne({
    where: {
      [models.Op.or]: [
        { id: input },
        { title: { [models.Op.like]: `%${input}%` } }
      ]
    },
    include: [
      { model: models.authors },
      { model: models.genres },
    ]
  })

  return novels
    ? response.send(novels)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelsByInput }
