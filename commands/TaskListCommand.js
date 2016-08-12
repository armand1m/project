'use strict';

const Task = require("../models/Task");
const Command = require("../core/Command");

class TaskListCommand extends Command {
  constructor() {
    super()
  }
  
  get name() { return "task ls" }

  action(args, callback) {
    if (Command.needsCurrentProject(callback)) return;

    Task
    .find({ projectId: process.env.CURRENT_PROJECT_ID })
    .then(tasks => {
      var result =
        tasks.length ?
        tasks.map(Command.getPrefixed).join(",\n") :
        Command.getHintLine(super.strings.warnings.NO_TASKS_FOR_THIS_PROJECT);

      this
      .write("\n")
      .write(super.strings.informational.EXISTING_TASKS)
      .write(result)
      .write("\n")

      callback();
    })
    .catch(err => {
      this.log(err)
      callback()
    });
  }
}

module.exports = TaskListCommand;
