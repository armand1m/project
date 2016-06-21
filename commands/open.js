'use strict';

const Project = require("../classes/Project");
const Strings = require("../strings");

const command = function(args, callback) {
  const setProject = project => {
    process.env.CURRENT_PROJECT = project;
    this.delimiter(`${process.env.CURRENT_PROJECT} $`);

    callback();
  };

  if (!Project.all().length) {
    console.error(Strings.warnings.NO_PROJECTS_CREATED);
    callback();
    return;
  }

  var opts = {
    type: 'list',
    choices: Project.all(),
    message: Strings.informational.CHOOSE_A_PROJECT,
    name: 'project'
  };

  this
  .prompt(opts)
  .then(answers => setProject(answers[opts.name]));
};

module.exports = {
  command: command,
  register(vorpal) {
    vorpal
    .command('open', Strings.commands.open)
    .action(command);
  }
};
