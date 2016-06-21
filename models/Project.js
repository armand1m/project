'use strict';

const Storage = require("../storage")
const Task = require("./Task");
const Model = require("./Model")(Storage.projects);

module.exports = class Project extends Model {
  constructor(object) {
    super(object);
  }

  get definition() {
    return {
      tasks: []
    };
  }

  get _id() { return this.instance._id; }
  get name() { return this.instance.name; }
  get tasks() { return this.instance.tasks; }
  
  set name(name) { this.instance.name = name; }
  
  addTask(task) {
    if (!task instanceof Task)
      throw new Error("Only Task Objects are allowed as Project tasks.");

    this.instance.tasks.push(task);
  }

  toString() {
    return `_id: ${this._id} - ${this.name}`;
  }

  static findByName(name) {
    return Project.find({ name });
  }
};
