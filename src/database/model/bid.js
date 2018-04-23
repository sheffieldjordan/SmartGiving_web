const mongoose = require("mongoose");
const { Schema } = mongoose;

const bidSchema = new Schema({
  ethMerchantAddr: String,
  bidAmt: { type: Number, default: 0 }
});

module.exports = bidSchema;
