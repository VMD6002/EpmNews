module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.API_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDERID: process.env.MEASUREMENT_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
};
