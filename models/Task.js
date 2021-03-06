'use strict';

const Storage = require("../storage").tasks;
const Model = require("../core/Model")(Storage);

module.exports = class Task extends Model {
  constructor(object) {
    super(object);
  }

  get definition() {
    return {
      projectId: 0,
      parentTaskId: null,
      name: null,
      duration: 0
    };
  }

  set name(name) { this.instance.name = name; }
  set projectId(projectId) { this.instance.projectId = projectId; }
  set duration(duration) { this.instance.duration = duration; }
  set parentTaskId(parentTaskId) { this.instance.parentTaskId = parentTaskId; }

  get _id() { return this.instance._id; }
  get name() { return this.instance.name; }
  get projectId() { return this.instance.projectId; }
  get parentTaskId() { return this.instance.parentTaskId; }
  get duration() { return this.instance.duration; }
  get tasks() { return this.instance.tasks; }
};
