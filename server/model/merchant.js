const mongoose = require("mongoose");
const { Schema } = mongoose;

const merchantSchema = new Schema({
  name: String,
  location: String,
  email: String,
  ethMerchantAddr: String,
  storeDescription: String,
  photo: String,
  minShipment: { type: Number, default: 0 },
  maxShipment: { type: Number, default: 0 },
  servedGifts: [String],
  servedActiveGifts: [String]
});
//photo: { data: Buffer, contentType: String }
module.exports = mongoose.model("Merchant", merchantSchema);
