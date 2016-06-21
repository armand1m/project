const fs = require('fs');
const path = require('path');

module.exports = function(vorpal) {
  return new Promise((resolve, reject) => {
    fs
    .readdir(__dirname, (err, files) => {
      try {
        if (err) 
          throw err;
        
        console.time("Loading commands took");
        
        files
        .filter(file => !(file == "index.js" || file == "command.js") && file.slice(-3) === '.js')
        .map(file => require(path.join(__dirname, file)))
        .forEach(Command => new Command().register(vorpal));

        console.timeEnd("Loading commands took");

        resolve();
      } catch (err) {
        reject(err);
      } 
    });
  });
};
