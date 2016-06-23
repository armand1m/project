'use strict';

const Task = require("../models/Task");
const Command = require("../core/Command");

class TaskRemoveCommand extends Command {
  get name() { return "task rm" }

  action(args, callback) {
    if (Command.needsCurrentProject(callback)) return;

    Task
    .find({ projectId: process.env.CURRENT_PROJECT_ID })
    .then(tasks => {
      this
      .prompt({
        type: 'checkbox',
        name: 'tasksToRemove',
        choices: tasks,
        message: super.strings.informational.SELECT_TASKS_TO_REMOVE
      })
      .then(answers => {
        var selected =
          tasks
          .filter(task => answers.tasksToRemove.indexOf(task.name) != -1)
          .map(task => { _id: task._id });

        console.log(selected);
        // 
        // Task
        // .remove(selected)
        // .then(deleteCount => {
        //   this.log(`${deleteCount} ${super.strings.informational.TASKS_REMOVED}`)
        //
        //   this.log(selected);
        //   callback();
        // });
      });
    });
  }
}

module.exports = TaskRemoveCommand;
