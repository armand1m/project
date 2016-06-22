'use strict';

class ExtendableError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}

class NotFoundError extends ExtendableError {
  constructor(query) {
    super(`Can't find documents for the query object \n\n${JSON.stringify(query.object)}\n\n in the DataStore '${query.dataStore}'.`);
  }
}

exports.NotFoundError = NotFoundError;
