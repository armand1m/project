const DEFAULT = process.env.LANGUAGE || "en";

const fs = require('fs');
const path = require('path');

const languageFile =
  fs
  .readdirSync(__dirname)
  .filter(file => file.slice(-5) === '.json' && file == `${DEFAULT}.json`)[0];

module.exports = require(path.join(__dirname, languageFile));
