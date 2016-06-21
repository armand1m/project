'use strict';

module.exports = class Task {
  constructor(task) {
    this.name = task.name || null;
    this.time = task.time || null;
    this.subTasks = task.subTasks || [];
  }

  set subTasks(subTasks) { return; }

  add(task) {
    this.subTasks.push(new Task(task));
    
    return this;
  }
};
