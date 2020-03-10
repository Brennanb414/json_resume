'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let InsectsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    index: true,
    required: true
  },
  photo_links: [String]
})



module.exports = mongoose.model('Insects', InsectsSchema)