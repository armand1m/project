'use strict';

const Storage = require("../storage")
const Model = require("../core/Model")(Storage.tasks);

module.exports = class Task extends Model {
  constructor(object) {
    super(object);
  }

  get definition() {
    return {
      projectId: 0,
      parentTaskId: 0,
      name: null,
      duration: 0,
      tasks: []
    };
  }

  set name(name) { this.instance.name = name; }
  set projectId(projectId) { this.instance.projectId = projectId; }
  set duration(duration) { this.instance.duration = duration; }

  get _id() { return this.instance._id; }
  get name() { return this.instance.name; }
  get projectId() { return this.instance.projectId; }
  get parentTaskId() { return this.instance.parentTaskId; }
  get duration() { return this.instance.duration; }
  get tasks() { return this.instance.tasks; }

  addTask(task) {
    this.instance.tasks.push(task);
  }

  toString() {
    return `_id: ${this._id} - ${this.name}`;
  }
};
