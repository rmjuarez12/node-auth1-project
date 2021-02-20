//* Import Knex and configuration file
const knex = require("knex");
const config = require("../knexfile");

//* Setup configured knex
const configuredKnex = knex(config.development);

//* Export configuration
module.exports = configuredKnex;
