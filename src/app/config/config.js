require('dotenv').config();

exports.PORT = process.env.PORT || 5000;
exports.APP_ID = process.env.APP_ID;
exports.EXCHANGE_RATE_URL = "https://openexchangerates.org/api/";