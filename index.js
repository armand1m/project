'use strict';

const vorpal = require('vorpal')();

require('./commands')(vorpal).then(() => {
  vorpal
  .delimiter(`project $`)
  .show();
}).catch(console.error);

