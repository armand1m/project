'use strict';

const Strings = require("../strings");

const command = function(args, callback) {
  this.log(process.env.CURRENT_PROJECT ? process.env.CURRENT_PROJECT : Strings.warnings.NO_PROJECT_OPENED);

  callback();
};

module.exports = {
  command,
  register(vorpal) {
    vorpal
    .command('current', Strings.commands.current)
    .action(command);
  }
};
