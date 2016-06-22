const fs = require('fs');
const path = require('path');
const Vorpal = require('vorpal');
const chalk = Vorpal().chalk;
const plus = chalk.green("+");
const Command = require('../core/Command');

module.exports = function(vorpal) {
  return new Promise((resolve, reject) => {
    fs.readdir(__dirname, (err, files) => {
      try {
        if (err)
          throw err;

        console.log("Loading commands..");
        console.time("Loading commands took");

        files
        .filter(file => file !== "index.js" && file.endsWith('.js'))
        .map(file => require(path.join(__dirname, file)))
        .filter(cmd => cmd.prototype instanceof Command)
        .forEach(cmd => console.log(`${plus} command: ${new cmd().register(vorpal).name}`));

        console.timeEnd("Loading commands took");

        resolve();
      } catch (err) {
        reject(err);
      }
    });
  });
};
