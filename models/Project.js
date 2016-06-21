'use strict';

const Storage = require("../storage")

module.exports = class Project {
  constructor(object) {
    this._id = object._id || null;
    this.name = object.name || null;
    this.tasks = object.tasks || [];
  }

  save() {
    return new Promise((resolve, reject) => {
      Storage.projects.insert(this, (err, project) => {
        if (err) reject(err);

        resolve(new Project(project));
      });
    });
  }

  static all() {
    return new Promise((resolve, reject) => {
      Storage.projects.find({}, (err, projects) => {
        if (err) reject(err);

        resolve(projects.map(project => new Project(project)));
      });
    });
  }

  static findByName(name) {
    return new Promise((resolve, reject) => {
      Storage.projects.find({ name }, function(err, project) {
        if (err) reject(err)

        resolve(new Project(project));
      });
    });
  }

  toString() {
    return `_id: ${this._id} - ${this.name}`;
  }
};
