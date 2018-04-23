const mongoose = require("mongoose");
const { Schema } = mongoose;
const giftSchema = require("./gift");

const recipientSchema = new Schema({
  orgName: String,
  representative: String,
  mission: String,
  email: String,
  website: String,
  location: String,
  ethRecipientAddr: String,
  photo: String,
  gifts: [giftSchema]
});

module.exports = mongoose.model("Recipient", recipientSchema);
