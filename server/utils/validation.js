function validate(req, type) {
  const error = {
    status: 200,
    message: 'OK',
  }

  const emailErrors = {
    templateId: {
      message: 'templateId key not found or incorrect',
      compareFn: value => !value || typeof value !== 'number',
    },
    variables: {
      message: 'variables key not found',
      compareFn: value => !value,
    },
  }

  const huntflowErrors = {
    firstName: {
      message: 'firstName key not found',
      compareFn: value => !value,
    },
    lastName: {
      message: 'lastName key not found',
      compareFn: value => typeof value !== 'string',
    },
    file: {
      message: 'cvFile key not found',
      compareFn: value => !value && !value.path,
    },
  }

  Object.entries(type === 'huntflow' ? huntflowErrors : emailErrors).some(([key, { message, compareFn }]) => {
    const isError = compareFn(key === 'file' ? req[key] : req.body[key])

    if (isError) {
      error.status = 500
      error.message = message
    }

    return isError
  })

  return {
    isValid: error.status === 200,
    error,
  }
}

module.exports = {
  validate,
}
