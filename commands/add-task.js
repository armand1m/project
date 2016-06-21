'use strict';

const Command = require("./command");

class AddTaskCommand extends Command {
  get name() { return "add-task" }

  command(args, callback) {
    if (!process.env.CURRENT_PROJECT) {
      console.error(super.strings.warnings.NO_PROJECT_OPENED);
      callback();
      return;
    }

    callback();
  }
}

module.exports = AddTaskCommand;