'use strict';

let mongoose = require('mongoose'),
  Insects = mongoose.model('Insects');

  exports.list_all_insects = (req, res) => {
    Insects.find({}, (err, insects) => {
      if(err)
        res.send(err);
      res.json(insects);
    });
  };

  exports.list_four_insects = (req, res) => {
    Insects.findRandom({}, {}, {limit:4}, (err, insects) => {
      if(err)
        res.send(err);
      res.json(insects);
    });
  };

  exports.create_insects = (req, res) => {
    var new_insects = new Insects(req.body);
    new_insects.save((err, insects) => {
      if(err)
        res.send(err);
      res.json(insects)
    });
  };

  exports.read_insects = (req, res) => {
    Insects.findById(master_id, (err, insects) => {
      if(err)
        res.send(err);
      res.json(insects);
    });
  };

  exports.update_insects = (req, res) => {
    Insects.findOneAndUpdate({name: req.body.name}, req.body, {new: true, upsert: true}, (err, insects) => {
      if(err)
        res.send(err);
      res.json(insects)
    });
  };

  exports.delete_insects = (req, res) => {
    Insects.remove({
      _id: req.params.insectsId
    }, (err, insects) => {
      if(err)
        res.send(err);
      res.json({message: 'Insects deleted'});
    });
  };