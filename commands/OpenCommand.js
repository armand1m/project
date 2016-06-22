'use strict';

const Project = require("../models/Project");
const Command = require("../core/Command");

class OpenCommand extends Command {
  get name() { return "open" }

  action(args, callback) {
    Project
    .all()
    .then(projects => {
      if (!projects.length) {
        console.warn(super.strings.warnings.NO_PROJECTS_CREATED);
        callback();
        return;
      }

      var opts = {
        type: 'list',
        choices: projects,
        message: super.strings.informational.CHOOSE_A_PROJECT,
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
  }
}

module.exports = OpenCommand;
