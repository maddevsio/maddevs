export default {
  $v: {
    fullName: {
      $touch: jest.fn(),
    },
    company: {
      $touch: jest.fn(),
    },
    email: {
      $touch: jest.fn(),
    },
    phoneNumber: {
      $touch: jest.fn(),
    },
    description: {
      $touch: jest.fn(),
    },
    validationGroup: {
      $invalid: false,
    },
    $reset: jest.fn(),
  },

  $store: {
    dispatch: jest.fn(),
  },
}
