'use strict';

const Project = require("../classes/Project");
const Strings = require("../strings");

const command = function(args, callback) {
  var project = new Project(args.name);
  project.save();

  this.log(Strings.informational.PROJECT_CREATED);

  callback();
};

module.exports = {
  command: command,
  register(vorpal) {
    vorpal
    .command('create [name]', Strings.commands.create)
    .action(command);
  }
};
