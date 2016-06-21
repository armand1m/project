'use strict';

const Strings = require("../strings");

class Command {
  get name() { return "command" }
  get params() { return "" }
  get strings() { return Strings }

  get description() { 
    if (!(this.name in this.strings.commands)) {
      throw new Error(`${this.strings.errors.COMMAND_WITHOUT_DESCRIPTION} ${this.name}`);
    }

    return this.strings.commands[this.name];
  }

  command(args, callback) {
    callback();
  }

  register(vorpal) {
    vorpal
    .command(`${this.name} ${this.params}`, this.description)
    .action(this.command);
  }
}

module.exports = Command;