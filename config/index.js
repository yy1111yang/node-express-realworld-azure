module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  COSMOSDB_USER: "<>",
  COSMOSDB_PASSWORD:
    "<>",
  COSMOSDB_DBNAME: "conduit",
  COSMOSDB_HOST: "<>.mongo.cosmos.azure.com",
  COSMOSDB_PORT: 10255,
};
