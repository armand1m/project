'use strict';

const Project = require("../models/Project");
const Task = require("../models/Task");
const Command = require("../core/Command");

class TaskAddCommand extends Command {
  get name() { return "task add" }
  get params() { return "" }

  action(args, callback) {
    var current = process.env.CURRENT_PROJECT;

    if (!current) {
      console.error(super.strings.warnings.NO_PROJECT_OPENED);
      callback();
      return;
    }

    this.prompt({
      type: 'input',
      name: 'taskName',
      message: super.strings.informational.TASK_NAME
    })
    .then(answers => {
      new Task({
        name: answers.taskName,
        projectId: process.env.CURRENT_PROJECT_ID
      })
      .save()
      .then(newTask => {
        this.log(`Task added.`)
        callback();
      });
    });
  }
}

module.exports = TaskAddCommand;
