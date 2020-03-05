'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ResumeSchema = new Schema({
  basics: {
    name: String,
    label: String,
    picture: String,
    email: String,
    phone: String,
    website: String,
    summary: String,
    location: {
      address: String,
      postalCode: String,
      city: String,
      countryCode: String,
      region: String
    },
    profiles: [{
      network: String,
      username: String,
      url: String
    }]
  },
  work: [{
    company: String,
    position: String,
    website: String,
    startDate: String,
    endDate: String,
    summary: String,
    highlights: [String]
  }],
  volunteer: [{
    organization: String,
    position: String,
    website: String,
    startDate: String,
    endDate: String,
    summary: String,
    highlights: [String]
  }],
  education: [{
    institution: String,
    area: String,
    studyType: String,
    startDate: String,
    endDate: String,
    gpa: String,
    courses: [String]
  }],
  awards: [{
    title: String,
    date: String,
    awarder: String,
    summary: String
  }],
  publications: [{
    name: String,
    publisher: String,
    releaseDate: String,
    website: String,
    summary: String
  }],
  skills: [{
    name: String,
    level: String,
    keywords: [String]
  }],
  languages: [{
    language: String,
    fluency: String
  }],
  interests: [{
    name: String,
    keywords: [String]
  }],
  references: [{
    name: String,
    reference: String
  }]
})



module.exports = mongoose.model('Resume', ResumeSchema)