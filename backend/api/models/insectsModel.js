'use strict';
let mongoose = require('mongoose');
let random = require('mongoose-simple-random');
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
InsectsSchema.plugin(random);



module.exports = mongoose.model('Insects', InsectsSchema)