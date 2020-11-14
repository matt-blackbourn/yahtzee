const knex = require( 'knex' )
const config = require( './knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex( config[env] ) //call knex, pass the config and restrict that to the current environment

module.exports = connection