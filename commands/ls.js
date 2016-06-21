'use strict';

const Project = require("../classes/Project")
const Strings = require("../strings");

const command = function(args, callback) {
  var projects = Project.all();

  this.log(
    projects.length ?
    projects.map(project => project.name).join(",\n") :
    Strings.warnings.NO_PROJECTS_CREATED
  );

  callback();
};

module.exports = {
  command: command,
  register(vorpal) {
    vorpal
    .command('ls', Strings.commands.ls)
    .action(command);
  }
};
