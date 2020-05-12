const novels = (connection, Sequelize, authors) => {
  return connection.define('novels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    authorId: { type: Sequelize.INTEGER, references: { model: authors, key: 'id' } },
  },
    {
      defaultScope: {
        attributes: { exclude: ['deletedAt'] }
      }
    },
    { paranoid: true })
}

module.exports = novels
