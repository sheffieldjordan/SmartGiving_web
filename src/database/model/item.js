const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  itemDescription: String,
  quantity: { type: Number, default: 0 },
  pricePerUnit: { type: Number, default: 0 }
});

module.exports = itemSchema;
