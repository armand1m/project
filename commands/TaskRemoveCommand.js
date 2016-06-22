'use strict';

const Task = require("../models/Task");
const Command = require("../core/Command");

class TaskRemoveCommand extends Command {
  get name() { return "task rm" }

  action(args, callback) {
    // Task
    // .find({ projectId: process.env.CURRENT_PROJECT_ID })
    // .then(tasks => {
      // this.log(tasks.map(task => ` > ${task._id} - "${task.name}"`).join("\n"));
      callback();
    // });
  }
}

module.exports = TaskRemoveCommand;
