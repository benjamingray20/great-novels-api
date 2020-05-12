const novelsGenres = (connection, Sequelize, novels, genres) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: novels, key: 'id' } },
  },
    {
      defaultScope: {
        attributes: { exclude: ['deletedAt'] }
      }
    },
    { paranoid: true })
}

module.exports = novelsGenres
