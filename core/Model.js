'use strict';

module.exports = function(Storage) {
  if (!Storage)
    throw new Error("A model needs a Storage.");

  function resolveResult(resolve, reject, err, result) {
    if (err) reject(err);

    if (result instanceof Array) {
      resolve(result.map(result => new this(result)));
    } else {
      resolve(new this(result));
    }
  }

  class Model {
    constructor(object) {
      this.instance = Object.assign(this.definition, object);
    }

    get definition() {
      return {};
    }

    save() {
      return new Promise((resolve, reject) => Storage.insert(this.instance, (err, doc) => {
        if (err) reject(err);

        this.instance = doc;

        resolve(this);
      }));
    }

    static all() {
      return new Promise((resolve, reject) => Storage.find({}, resolveResult.bind(this, resolve, reject)));
    }

    static find(object) {
      return new Promise((resolve, reject) => Storage.find(object, resolveResult.bind(this, resolve, reject)));
    }
  }

  return Model;
};
