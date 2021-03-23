import * as emailsService from '../EmailsService';

jest.mock('sendpulse-api', () => ({
  init: (userId, apiKey, tokenStorage, cb) => cb(),
  smtpSendMail: jest.fn((cb, email) => cb(email))
}));

describe('EmailsService', () => {
  const req = {
    body: {
      variables: {
        modalTitle: 'title',
        emailTo: 'user',
        subject: 'subject'
      },
      templateId: 123,
      attachment: null
    }
  };

  const callback = jest.fn();

  test('should correctly call sendEmail and call some sendpulse methods', () => {
    emailsService.sendEmail(req, callback);
    expect(callback).toBeCalledWith({
      subject: req.body.variables.subject,
      template: {
        id: req.body.templateId, // required
        variables: req.body.variables
      },
      from: {
        name: req.body.variables.modalTitle,
        email: 'marketing@maddevs.io'
      },
      to: [
        {
          name: 'Mad Devs team',
          email: req.body.variables.emailTo
        }
      ]
    });
  });

  test('should correctly call sendEmail and call some sendpulse methods with attachment', () => {
    req.body.attachment = {
      name: 'name',
      base64: 'base64'
    };
    
    emailsService.sendEmail(req, callback);
    expect(callback).toBeCalledWith({
      subject: req.body.variables.subject,
      template: {
        id: req.body.templateId, // required
        variables: req.body.variables
      },
      from: {
        name: req.body.variables.modalTitle,
        email: 'marketing@maddevs.io'
      },
      to: [
        {
          name: 'Mad Devs team',
          email: req.body.variables.emailTo
        }
      ],
      attachments_binary: {
        name: 'base64'
      }
    });
  });
});
