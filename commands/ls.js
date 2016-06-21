'use strict';

const Project = require("../models/Project")
const Strings = require("../strings");

const fn = projects => {
  return projects.length ?
         projects.map(project => project.toString()).join(",\n") :
         Strings.warnings.NO_PROJECTS_CREATED;
};

const command = function(args, callback) {
  Project
  .all()
  .then(projects => {
    this.log(fn(projects));

    callback();
  });
};

module.exports = {
  fn,
  command,
  register(vorpal) {
    vorpal
    .command('ls', Strings.commands.ls)
    .action(command);
  }
};
