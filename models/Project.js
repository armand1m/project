'use strict';

const Storage = require("../storage").projects;
const Model = require("../core/Model")(Storage);

module.exports = class Project extends Model {
  constructor(object) {
    super(object);
  }

  get definition() {
    return {
      name: null
    };
  }

  get _id() { return this.instance._id; }
  get name() { return this.instance.name; }
  get tasks() { return this.instance.tasks; }
  set name(name) { this.instance.name = name; }

  toString() {
    return `Project: "${this.name}"`
  }
};
