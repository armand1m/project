'use strict';

const Command = require("../core/Command");

class CurrentCommand extends Command {
  get name() { return "current" }

  action(args, callback) {
    this.log(process.env.CURRENT_PROJECT ? process.env.CURRENT_PROJECT : super.strings.warnings.NO_PROJECT_OPENED);
    callback();
  }
}

module.exports = CurrentCommand;
