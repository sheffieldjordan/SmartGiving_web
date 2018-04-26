const mongoose = require("mongoose");
const { Schema } = mongoose;

const donorSchema = new Schema({
  name: String,
  email: String,
  ethDonorAddr: String,
  donatedGifts: [String],
  donatedActiveGifts: [String]
});

module.exports = mongoose.model("Donor", donorSchema);
