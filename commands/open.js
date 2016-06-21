'use strict';

const Project = require("../models/Project");
const Strings = require("../strings");

const command = function(args, callback) {
  Project
  .all()
  .then(projects => {
    if (!projects.length) {
      console.error(Strings.warnings.NO_PROJECTS_CREATED);
      callback();
      return;
    }

    var opts = {
      type: 'list',
      choices: projects,
      message: Strings.informational.CHOOSE_A_PROJECT,
      name: 'project'
    };

    this
    .prompt(opts)
    .then(answers => {
      process.env.CURRENT_PROJECT = answers[opts.name];
      this.delimiter(`${process.env.CURRENT_PROJECT} $`);
      
      callback();
    });
  })
  .catch(err => {
    console.error(err);
    callback();
    return;
  });
};

module.exports = {
  command,
  register(vorpal) {
    vorpal
    .command('open', Strings.commands.open)
    .action(command);
  }
};
