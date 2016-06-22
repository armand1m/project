'use strict';

const Project = require("../models/Project");
const Task = require("../models/Task");
const Command = require("../core/Command");

class AddTaskCommand extends Command {
  get name() { return "task add" }
  get params() { return "" }

  action(args, callback) {
    var current = process.env.CURRENT_PROJECT;

    if (!current) {
      console.error(super.strings.warnings.NO_PROJECT_OPENED);
      callback();
      return;
    }

    Project
    .findByName(current)
    .then(project => {
      this.prompt([
        {
          type: 'input',
          name: 'name',
          message: super.strings.informational.TASK_NAME
        },
        {
          type: 'input',
          name: 'hasParent',
          message: super.strings.informational.HAS_PARENT_TASK
        }
      ])
      .then(answers => {
        var task = new Task(answers);
        task.projectId = project._id;

        console.log(answers);
      });
    })
    .catch(console.error);
  }
}

module.exports = AddTaskCommand;
