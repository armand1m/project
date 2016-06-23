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
        projects.map(Command.getPrefixed).join(",\n") :
        super.strings.warnings.NO_PROJECTS_CREATED;

      this.log("\n");
      this.log(super.strings.informational.EXISTING_PROJECTS);
      this.log(result);
      this.log("\n");

      callback();
    });
  }
}

module.exports = ListCommand;
