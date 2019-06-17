const { ContentTypeError, NotFoundError } = require("./error");

module.exports = Object.freeze({
  accessControl: (request, response, next) => {
    response.append(
      "Access-Control-Allow-Origin",
      "*",
    );

    response.append(
      "Access-Control-Allow-Methods",
      "GET, PATCH, PUT, POST, DELETE, OPTIONS",
    );

    response.append(
      "Access-Control-Allow-Headers",
      "Authorization, Content-Type, Accept, Content-Length",
    );

    if (request.method === "OPTIONS") {
      response.status(200).json({}).end();
      return;
    }

    next();
  },
  headerValidation: (request, response, next) => {
    const accept = request.get("accept");

    if (accept !== "application/json") {
      next(new ContentTypeError("Content type not supported"));
      return;
    }

    next();
  },
  notFoundHandler: (request, response, next) => {
    next(new NotFoundError("Resource not found"));
  },
  // eslint-disable-next-line no-unused-vars
  errorHandler: (error, request, response, next) => {
    if (!error.statusCode) {
      // eslint-disable-next-line no-param-reassign
      error.statusCode = 500;
    }

    console.log("ERROR_BEGIN --------------------------------");
    console.error(error);
    console.log("ERROR_END ----------------------------------");

    const { statusCode, message } = error;
    response.status(statusCode).json({ statusCode, message }).end();
  },
});
