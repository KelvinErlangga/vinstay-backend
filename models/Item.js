const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: "Indonesia",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
  imageId: [
    {
      type: ObjectId,
      ref: "Image",
    },
  ],
  featureId: [
    {
      type: ObjectId,
      required: "Feature",
    },
  ],
  activityId: {
    type: ObjectId,
    required: "Activity",
  },
});

module.exports = mongoose.model("Item", itemSchema);