// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: 'knowledge',
    user:     'root',
    password: 'remyson123'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
