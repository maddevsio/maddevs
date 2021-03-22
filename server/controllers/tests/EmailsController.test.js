import * as controller from '../EmailsController';
import * as service from '../../services/EmailsService';

const sendEmail = jest.fn((_, cb) => cb(123));

jest.mock('../../services/EmailsService', () => ({
  sendEmail: jest.fn()
}));

service.sendEmail.mockImplementation(sendEmail);

describe('EmailController', () => {
  const req = {
    body: {}
  };
  const res = {
    status: jest.fn(() => ({
      json: jest.fn()
    })),
    json: jest.fn()
  };
  
  test('index should validate data and return errors', () => {
    controller.index(req, res);
    expect(res.status).toBeCalledWith(500);

    req.body.templateId = '123';
    controller.index(req, res);
    expect(res.status).toBeCalledWith(500);

    req.body.templateId = 123;
    controller.index(req, res);
    expect(res.status).toBeCalledWith(500);
  });

  test('index should correctly passed validation and call sendEmail', () => {
    req.body = {
      variables: {},
      templateId: 123
    };

    controller.index(req, res);
    expect(sendEmail).toBeCalledTimes(1);
    expect(res.json).toBeCalledWith(123);
  });
});
