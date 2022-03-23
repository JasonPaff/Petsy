﻿const mongoose = require('mongoose');

const pet_photo_schema = new mongoose.Schema({
    petId: {type: String, required: true},
    photo: {type: String, required: true},
    isProfilePhoto: {type: Boolean, default: false}
});

module.exports.Pet_Photo = mongoose.model('Pet_Photo', pet_photo_schema);