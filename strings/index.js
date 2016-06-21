const DEFAULT = "en_US";

module.exports = require(`./${process.env.LANGUAGE || DEFAULT}.json`);
