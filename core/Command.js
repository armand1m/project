'use strict';

const Strings = require("../strings");

class Command {
  get name() { return "command" }
  get params() { return "" }
  get options() { return [] }
  get strings() { return Strings }

  get description() {
    if (!(this.name in this.strings.commands)) {
      throw new Error(`${this.strings.errors.COMMAND_WITHOUT_DESCRIPTION} ${this.name}`);
    }

    return this.strings.commands[this.name];
  }

  action(args, callback) {
    callback();
  }

  register(vorpal) {
    var command =
      vorpal.command(`${this.name} ${this.params}`, this.description);

    if (this.options.length) {
      this.options.forEach(option => command.option(option.name, option.description));
    }

    command.action(this.action);

    return this;
  }
}

module.exports = Command;
