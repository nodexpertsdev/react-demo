const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/boiler-plate',
  port: process.env.PORT || 9000,
};

export default config;
