// service
const { sendEmail } = require('../services/EmailsService');

function validate(req) {
  const error = {
    status: 200,
    message: 'OK'
  };

  if(!req.body.templateId) {
    error.status = 500;
    error.message = 'templateId key not found';
  } else if(typeof req.body.templateId !== 'number') {
    error.status = 500;
    error.message = 'templateId key must be a number';
  } else if(!req.body.variables) {
    error.status = 500;
    error.message = 'variables key not found';
  }

  return {
    isValid: error.status === 200,
    error
  };
}

function index(req, res) {
  const { isValid, error } = validate(req);
  if(!isValid) return res.status(error.status).json(error);
  sendEmail(req, data => res.json(data));
}

module.exports = {
  index
};
