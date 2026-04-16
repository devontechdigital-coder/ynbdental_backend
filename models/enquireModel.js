import mongoose from "mongoose";

const enquireSchema = mongoose.Schema({
  fullname: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  qty: {
    type: Number,
  },
  service: {
    type: String,
  },
  QTY: {
    type: Number,
  },
  type: {
    type: Number,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
  },
  requirement : {
    type: String,
  },
  Requirement: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  location: {
    type: String,
  },
  lat: {
    type: String,
  },
  lng: {
    type: String,
  },
  enquireRadiusKm: {
    type: Number,
    default: 0,
  },
  nearbyUserIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  name: {
    type: String,
  },
  organizationName: {
    type: String,
  },
  designation: {
    type: String,
  },
  interested: {
    type: String,
  },
  planId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "buyplan",
  },
  
},
  { timestamps: true }
);

const enquireModel = mongoose.model('enquire', enquireSchema);

export default enquireModel;
