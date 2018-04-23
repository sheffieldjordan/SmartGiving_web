const mongoose = require("mongoose");
const { Schema } = mongoose;
const bidSchema = require("./bid");
const itemSchema = require("./item");

const giftSchema = new Schema({
  description: String,
  expiry: Date,
  ethGiftAddr: { type: String, default: "" },
  suggDonationAmt: { type: Number, default: 0 },
  ethDonorAddr: String,
  donorDonationAmt: { type: Number, default: 0 },
  donorPledgeDate: Date,
  bids: [bidSchema],
  items: [itemSchema],
  ethMerchantAddr: String,
  finalCost: { type: Number, default: 0 },
  merchantShipped: { type: Boolean, default: false },
  shippingDate: Date,
  itemReceived: { type: Boolean, default: false },
  receivedDate: Date,
  balance: { type: Number, default: 0 },
  creationDate: Date,
  lastUpdate: Date
});

module.exports = giftSchema;
