'use strict';

const Project = require("../models/Project");
const Command = require("../core/Command");

class ListCommand extends Command {
  get name() { return "ls" }

  action(args, callback) {
    Project
    .all()
    .then(projects => {
      var result =
        projects.length ?
        projects.map(project => project.toString()).join(",\n") :
        super.strings.warnings.NO_PROJECTS_CREATED;

      this.log(result);

      callback();
    });
  }
}

module.exports = ListCommand;
