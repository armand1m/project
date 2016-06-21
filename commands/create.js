'use strict';

const Project = require("../models/Project");
const Command = require("../core/command");

class CreateCommand extends Command {
  get name() { return "create" }
  get params() { return "[name]" }

  command(args, callback) {
    new Project({
      name: args.name
    })
    .save()
    .then(project => {
      this.log(super.strings.success.PROJECT_CREATED);
      callback();
    });
  }
}

module.exports = CreateCommand;
