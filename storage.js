const Datastore = require('nedb')

var Storage = {};

Storage.projects = new Datastore({ filename: './data/projects.db', autoload: true });
Storage.tasks = new Datastore({ filename: './data/tasks.db', autoload: true });

module.exports = Storage;
