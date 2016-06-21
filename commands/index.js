const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = function(vorpal) {
  function registerCmd(Command) {
    var command = new Command();
    command.register(vorpal);

    console.log(`${chalk.green("+")} command: ${command.name}`);
  }

  return new Promise((resolve, reject) => {
    fs
    .readdir(__dirname, (err, files) => {
      try {
        if (err) 
          throw err;
        
        console.log("Loading commands..");
        console.time("Loading commands took");
        
        var commands = 
          files
          .filter(file => !(file == "index.js" || file == "command.js") && file.slice(-3) === '.js')
          .map(file => require(path.join(__dirname, file)));

        commands.forEach(registerCmd); 

        console.timeEnd("Loading commands took");

        resolve();
      } catch (err) {
        reject(err);
      } 
    });
  });
};
