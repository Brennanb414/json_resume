'use strict';

let mongoose = require('mongoose'),
  Resume = mongoose.model('Resume');

  exports.list_all_resumes = (req, res) => {
    Resume.find({}, (err, resume) => {
      if(err)
        res.send(err);
      res.json(resume);
    });
  };

  exports.create_resume = (req, res) => {
    var new_resume = new Resume(req.body);
    new_resume.save((err, resume) => {
      if(err)
        res.send(err);
      res.json(resume)
    });
  };

  exports.read_resume = (req, res) => {
    Resume.findById(req.params.resumeId, (err, resume) => {
      if(err)
        res.send(err);
      res.json(resume);
    });
  };

  exports.update_resume = (req, res) => {
    Resume.findOneAndUpdate({_id: req.params.resumeId}, req.body, {new: true}, (err, resume) => {
      if(err)
        res.send(err);
      res.json(resume);
    });
  };

  exports.delete_resume = (req, res) => {
    Resume.remove({
      _id: req.params.resumeId
    }, (err, resume) => {
      if(err)
        res.send(err);
      res.json({message: 'Resume deleted'});
    });
  };