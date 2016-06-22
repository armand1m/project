'use strict';

const Command = require("../core/Command");

class RemoveCommand extends Command {
  get name() { return "rm" }
  get params() { return "" }

  action(args, callback) {
    this.log("Todo: remove a existing project");

    callback();
  }
}

module.exports = RemoveCommand;
