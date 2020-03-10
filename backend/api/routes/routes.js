'use strict';
module.exports = function(app) {
  let resume = require('../controllers/resumeController');
  let insects = require('../controllers/insectsController');

  app.route('/api/resume')
    .get(resume.list_all_resumes)
    .post(resume.create_resume)
    .put(resume.update_resume)

  app.route('/api/insects')
    .get(insects.list_all_insects)
    .post(insects.update_insects)
    .put(insects.update_insects)
  
  // app.route('/resume/:resumeId')
  //   .get(resume.read_resume)
  //   .delete(resume.delete_resume)
};