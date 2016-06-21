'use strict';

const Strings = require("../strings");

const command = function(args, callback) {
  if (!process.env.CURRENT_PROJECT) {
    console.error(Strings.warnings.OPEN_PROJECT_TO_ADD_TASK);
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
