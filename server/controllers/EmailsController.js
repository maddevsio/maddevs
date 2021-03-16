// service
const { sendEmail } = require('../services/EmailsService');

function validate(req) {
  const results = {
    status: 200,
    message: 'OK'
  };

  if(!req.body.templateId) {
    results.status = 500;
    results.message = 'templateId key not found';
  } else if(typeof req.body.templateId !== 'number') {
    results.status = 500;
    results.message = 'templateId key must be a number';
  } else if(!req.body.variables) {
    results.status = 500;
    results.message = 'variables key not found';
  }

  return {
    isValid: results.status === 200,
    results
  };
}

function index(req, res) {
  const { isValid, results } = validate();
  if(!isValid) req.status(results.status).json(results);
  const callback = data => res.json(data);
  sendEmail(req, callback);
}

module.exports = {
  index
};
