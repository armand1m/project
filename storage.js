const loki = require('lokijs');
const storage = new loki('./data/loki.json', {
  autosave: true,
  autoload: true
});

module.exports = storage;
