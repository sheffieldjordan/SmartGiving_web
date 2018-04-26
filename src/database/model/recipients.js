const mongoose = require("mongoose");
const { Schema } = mongoose;
const giftSchema = require("./gift");

const recipientSchema = new Schema({
  title: String,
  contact_name: String,
  about: String,
  email: String,
  website: String,
  facebook: String,
  instagram: String,
  twitter: String,
  location: String,
  ethRecipientAddr: String,
  image: String,
  gifts: [giftSchema]
});

module.exports = mongoose.model("Recipient", recipientSchema);
