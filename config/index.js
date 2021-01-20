module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  COSMOSDB_USER: "conduitcosmosdb",
  COSMOSDB_PASSWORD:
    "eF1OTLGgfrWI6dPViI3e7Qdxn1LyzeUIPdjTvHfx4NOSJIaZL6BOvYFJ0vmDA1mi8OYoR5AVX1H5CKcJx38P7w==",
  COSMOSDB_DBNAME: "conduit",
  COSMOSDB_HOST: "conduitcosmosdb.mongo.cosmos.azure.com",
  COSMOSDB_PORT: 10255,
};
