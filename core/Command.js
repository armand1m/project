'use strict';

const Strings = require("../strings");
const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;

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

  static get prefix() {
    return chalk.green("> ");
  }

  static get errorPrefix() {
    return 'x -';
  }

  static get hintPrefix() {
    return '∆ -';
  }

  static getPrefixed(object) {
    return `${Command.prefix} ${object}`;
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

  static needsCurrentProject(callback) {
    var current = process.env.CURRENT_PROJECT;

    if (!current) {
      console.error(Command.getErrorLine(Strings.warnings.NO_PROJECT_OPENED));
      console.info(Command.getHintLine(Strings.informational.SEE_OPEN_CMD))
      callback();
      return true;
    }

    return false;
  }

  static getErrorLine(message) {
    return `${chalk.red(Command.errorPrefix)} ${message}`;
  }

  static getHintLine(message) {
    return `${chalk.cyan(Command.hintPrefix)} ${message}`;
  }
}

module.exports = Command;
