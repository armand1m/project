'use strict';

const Task = require("../models/Task");
const Command = require("../core/Command");

class TaskListCommand extends Command {
  get name() { return "task ls" }

  action(args, callback) {
    if (Command.needsCurrentProject(callback)) return;
    
    Task
    .find({ projectId: process.env.CURRENT_PROJECT_ID })
    .then(tasks => {
      this.log("\n");
      this.log(super.strings.informational.EXISTING_TASKS);
      this.log(tasks.map(Command.getPrefixed).join("\n"));
      this.log("\n");

      callback();
    });
  }
}

module.exports = TaskListCommand;
