'use strict';
module.exports = function(app) {
  let resume = require('../controllers/resumeController');

  app.route('/resume')
    .get(resume.list_all_resumes)
    .post(resume.create_resume)
    .put(resume.update_resume)
  
  // app.route('/resume/:resumeId')
  //   .get(resume.read_resume)
  //   .delete(resume.delete_resume)
};