'use strict';

const Project = require("../models/Project");
const Task = require("../models/Task");
const Command = require("../core/Command");

class SubtaskAddCommand extends Command {
  get name() { return "subtask add" }
  get params() { return "" }

  action(args, callback) {
    var current = process.env.CURRENT_PROJECT;

    if (!current) {
      console.error(super.strings.warnings.NO_PROJECT_OPENED);
      callback();
      return;
    }

    Task
    .find({ projectId: process.env.CURRENT_PROJECT_ID })
    .then(tasks => {
      this.prompt([
        {
          type: 'input',
          name: 'taskName',
          message: super.strings.informational.TASK_NAME
        },
        {
          type: 'checkbox',
          name: 'parentTask',
          choices: tasks,
          message: super.strings.informational.SELECT_THE_PARENT_TASK
        }
      ])
      .then(answers => {
        // new Task({
        //   name: answers.taskName,
        //   projectId: process.env.CURRENT_PROJECT_ID
        // })
        // .save()
        // .then(newTask => {
          this.log(answers);
          callback();
        // });
      });
    });
  }
}

module.exports = SubtaskAddCommand;
