# Commands

This is the folder where you can find project commands.

The command is simply a module that exposes a ES6 Class that extends the `Command` class from `./core/command.js`.

The `./commands/index.js` is a command loader that loads all the modules in the `./commands` folder into a vorpal instance using the `register(vorpal)` method defined in `class Command`.

Every command must have a description inside the `commands` key in the strings file being loaded by `./strings/index.js`, or the class implementation must override the `get description() {}` method, but it is not recommended.

## Boilerplate

- Commented:

```js
'use strict';

const Command = require("../core/Command");

class HelloWorldCommand extends Command {
  /**
   * @returns a string with command name
   */
  get name() { return "hello-world" }

  /**
   * @returns a string of vorpal params
   */
  // get params() { return "[optional] <required>" }

  /**
   * @returns a string with the command description
   * @deprecated not recommended.
   */
  // get description() { return "prints a 'Hello World'" }

  /**
   * @async must call the callback argument when it's job is done
   * @param args command arguments
   * @param callback callback function
   * @returns void
   */
  action(args, callback) {
    this.log("Hello world!");

    callback();
  }
}

module.exports = HelloWorldCommand;
```

- Clean:

```js
'use strict';

const Command = require("../core/Command");

class HelloWorldCommand extends Command {
  get name() { return "hello-world" }

  action(args, callback) {
    this.log("Hello world!");

    callback();
  }
}

module.exports = HelloWorldCommand;
```
