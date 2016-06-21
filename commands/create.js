'use strict';

const Project = require("../models/Project");
const Strings = require("../strings");

const command = function(args, callback) {
  new Project(args.name)
  .save()
  .then(project => {
    this.log(Strings.success.PROJECT_CREATED);

    callback();
  });
};

module.exports = {
  command,
  register(vorpal) {
    vorpal
    .command('create [name]', Strings.commands.create)
    .action(command);
  }
};
