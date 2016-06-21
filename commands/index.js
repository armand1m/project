const fs = require('fs');
const path = require('path');

module.exports = function(vorpal) {
  fs
  .readdirSync(__dirname)
  .filter(file => file !== "index.js" && file.slice(-3) === '.js')
  .forEach(file => {
    var command = require(path.join(__dirname, file));
    command.register(vorpal);

    console.log(`+ command ${file}`);
  });
};
