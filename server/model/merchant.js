const mongoose = require("mongoose");
const { Schema } = mongoose;

const merchantSchema = new Schema({
  name: String,
  location: String,
  email: String,
  ethMerchantAddr: String,
  storeDescription: String,
  photo: String,
  servedGifts: [String],
  servedActiveGifts: [String]
});
//photo: { data: Buffer, contentType: String }
module.exports = mongoose.model("Merchant", merchantSchema);
