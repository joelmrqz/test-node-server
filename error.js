class AuthError extends Error {
  constructor(message) {
    super(message);
    Error.captureStackTrace(this, AuthError);
    this.statusCode = 401;
  }
}

class ParamError extends Error {
  constructor(message) {
    super(message);
    Error.captureStackTrace(this, ParamError);
    this.statusCode = 400;
  }
}

class ContentTypeError extends Error {
  constructor(message) {
    super(message);
    Error.captureStackTrace(this, ContentTypeError);
    this.statusCode = 406;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    Error.captureStackTrace(this, NotFoundError);
    this.statusCode = 404;
  }
}

class ConflictError extends Error {
  constructor(message) {
    super(message);
    Error.captureStackTrace(this, ConflictError);
    this.statusCode = 409;
  }
}

module.exports = Object.freeze({
  AuthError,
  ConflictError,
  ContentTypeError,
  NotFoundError,
  ParamError,
});
