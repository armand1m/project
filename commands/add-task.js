'use strict';

const Strings = require("../strings");

const command = function(args, callback) {
  if (!process.env.CURRENT_PROJECT) {
    console.error(Strings.warnings.NO_PROJECT_OPENED);
    callback();
    return;
  }

  callback();
};

module.exports = {
  command: command,
  register(vorpal) {
    vorpal
    .command('add-task', Strings.commands["add-task"])
    .action(command);
  }
};
