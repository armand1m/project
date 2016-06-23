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
        var selected =
          projects.filter(project => project.name == answers[opts.name])[0];

        process.env.CURRENT_PROJECT_ID = selected._id;
        process.env.CURRENT_PROJECT = selected.name;

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
