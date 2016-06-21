'use strict';

const vorpal = require('vorpal')();

require('./commands')(vorpal);

vorpal
.delimiter(`project $`)
.show();
