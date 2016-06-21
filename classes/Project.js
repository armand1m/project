'use strict';

const storage = require("../storage")
const ProjectCollection = storage.addCollection("project");

module.exports = class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  save() {
    return ProjectCollection.insert(this);
  }

  static all() {
    var result = ProjectCollection.find();
    
    return result ? result : [];
  }
};
