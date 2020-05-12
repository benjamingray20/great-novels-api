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

const getNovelsById = async (request, response) => {
  const { id } = request.params

  const novels = await models.novels.findOne({
    where: { id },
    include: [
      { model: models.authors },
      { model: models.genres },
    ]
  })

  return novels
    ? response.send(novels)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelsById }
