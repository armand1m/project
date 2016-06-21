'use strict';

const Storage = require("../storage")

module.exports = class Task {
  constructor(object) {
    this._id = object._id || null;
    this.projectId = object.projectId || null;
    this.name = object.name || null;
    this.duration = object.duration || 0;
    this.tasks = object.tasks || [];
  }

  set tasks(tasks) { return; }

  add(task) {
    this.tasks.push(new Task(task));

    return this;
  }

  save() {
    return new Promise((resolve, reject) => {
      Storage.tasks.insert(this, (err, task) => {
        if (err) reject(err);

        resolve(new Task());
      });
    });
  }

  static all() {
    return new Promise((resolve, reject) => {
      Storage.tasks.find({}, (err, tasks) => {
        if (err) reject(err);

        resolve(tasks.map(task => new Task(task)));
      });
    });
  }

  static findByName(name) {
    return new Promise((resolve, reject) => {
      Storage.tasks.find({ name }, function(err, task) {
        if (err) reject(err)

        resolve(new Task(task));
      });
    });
  }

  static findByProjectId(projectId) {
    return new Promise((resolve, reject) => {
      Storage.tasks.find({ projectId }, function(err, task) {
        if (err) reject(err)

        resolve(new Task(task));
      });
    });
  }
};
