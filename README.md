# Project

Project is a CLI tool for measuring software project costs.

## Why not MS Project, ProjectLibre, Wrike, etc?

I've started getting some projects with some friends out of our jobs, and while measuring the costs to our clients, we've tried all these tools. And we find that these tools are **not** productive. They don't have key snippets, you must be using your mouse all the time, its slow, huge GUI interfaces with added complexity, and so on. Maybe for non developers it is ok, but I'm a developer and I like when I can do the things faster and get a better result at the end.

So we started building Project.

Project will start as a CLI tool built in Node.js using [Vorpal.js](http://vorpal.js.org/). We consider turning it into a web app in the future with some cool functionality, but for now our focus is productivity.

## Features

- [x] Create Project
  - [x] Project Name
  - [ ] Project Start Date
  - [ ] Calculate Project due date based on tasks and its durations.
- [ ] Delete a Project
- [ ] Update a Project
- [x] List all Projects
- [x] Open a Project
- [ ] Project Overview
- [x] List Tasks in Current Project
- [ ] List Tasks and Subtasks in Current Project
- [x] Create Tasks in the Project
  - [x] Task Name
  - [ ] Task Duration
- [x] Delete a task
  - [ ] Delete task subtasks
- [ ] Create Subtasks in a Task <small>*(in progress)*</small>
- [ ] Create a Resource
  - [ ] Resource Name
  - [ ] Resource Price per Hour
  - [ ] Resource Disponibility
- [ ] Allocate resource on a task.
  - [ ] Once resource allocated, it must calculate the cost of that task.
- [ ] Generate static HTML files for reporting.

## License

MIT ©
[Armando Magalhaes](http://github.com/armand1m),
[Guilherme Kammsetzer](http://github.com/guilhermelimak)
