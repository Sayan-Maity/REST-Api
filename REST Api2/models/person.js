const mongoose = require('mongoose');


const geolocationSchema = new mongoose.Schema({
  latitude: {
    type: String,
    default: '0',
  },
  longitude: {
    type: String,
    default: '0',
  },
});

const locationSchema = new mongoose.Schema({
  city: {
    type: String,
    default: 'unknown',
  },
  country: {
    type: String,
    default: 'unknown',
  },
  geolocation: {
    type: geolocationSchema,
    required: true,
  },
});

const nameSchema = new mongoose.Schema({
  firstName : {
    type: String,
    required: true,
    minLength: 3, // min 3 length name should be given
  },
  middleName : {
    type: String,
  },
  lastName : {
    type: String,
    required: true,
  },
})

const personSchema = new mongoose.Schema(
  {
    name: {
      type: nameSchema,
    },
    contact: {
      type: String,
      required: true,
      // minLength: 10,
      // maxLength: 10,
      unique: true,
      match: /^[0-9]{10}$/,
      message: 'Please enter a valid 10-digit phone number',
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email id already present"],
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Please enter a valid email address',
    },
    ranking: {
      type: String,
      required: true,
    },
    location: {
      type: locationSchema,
      required: true,
    },
  },
  { timestamps: true } // saves the createdAt and updatedAt time when any new post is done
);

module.exports = mongoose.model('Person', personSchema);
