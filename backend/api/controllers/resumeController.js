'use strict';

let mongoose = require('mongoose'),
  Resume = mongoose.model('Resume'),
  master_id = '5e62bcb0ff6e53049b5e3b88';

  exports.list_all_resumes = (req, res) => {
    Resume.findById(master_id, (err, resume) => {
      if(err)
        res.send(err);
      console.log('resume', resume);
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
    Resume.findById(master_id, (err, resume) => {
      if(err)
        res.send(err);
      res.json(resume);
    });
  };

  exports.update_resume = (req, res) => {
    Resume.findOneAndUpdate({_id: master_id}, req.body, {new: true}, (err, resume) => {
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