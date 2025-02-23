const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'tasks.json');

// Ensure tasks file exists
if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

const getTasks = () => JSON.parse(fs.readFileSync(FILE_PATH));
const saveTasks = (tasks) => fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));

const addTask = (description) => {
    const tasks = getTasks();
    const newTask = {
        id: tasks.length + 1,
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`);
};

const updateTask = (id, newDescription) => {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return console.log('Task not found.');
    task.description = newDescription;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log('Task updated successfully.');
};

const deleteTask = (id) => {
    let tasks = getTasks();
    tasks = tasks.filter(t => t.id !== parseInt(id));
    saveTasks(tasks);
    console.log('Task deleted successfully.');
};

const markTask = (id, status) => {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return console.log('Task not found.');
    task.status = status;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Task marked as ${status}.`);
};

const listTasks = (status) => {
    const tasks = getTasks();
    const filteredTasks = status ? tasks.filter(t => t.status === status) : tasks;
    console.table(filteredTasks);
};

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case 'add':
        addTask(args.slice(1).join(' '));
        break;
    case 'update':
        updateTask(args[1], args.slice(2).join(' '));
        break;
    case 'delete':
        deleteTask(args[1]);
        break;
    case 'mark-in-progress':
        markTask(args[1], 'in-progress');
        break;
    case 'mark-done':
        markTask(args[1], 'done');
        break;
    case 'list':
        listTasks(args[1]);
        break;
    default:
        console.log('Invalid command. Use add, update, delete, mark-in-progress, mark-done, or list.');
}

console.log('\nHow to Run This Project:\n');
console.log('1. Open a terminal and navigate to the project directory.');
console.log('2. Run "node <filename>.js <command> <arguments>"');
console.log('   Example: node task-cli.js add "Buy groceries"');
console.log('\nAvailable Commands:');
console.log('   add <task description> - Adds a new task');
console.log('   update <task ID> <new description> - Updates an existing task');
console.log('   delete <task ID> - Deletes a task');
console.log('   mark-in-progress <task ID> - Marks a task as in progress');
console.log('   mark-done <task ID> - Marks a task as done');
console.log('   list [status] - Lists tasks (all, done, todo, in-progress)');
