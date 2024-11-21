import { EventEmitter } from 'events';
//import { eventNames } from 'process';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' +name);
}

function goodbyeHandler(name) {
    console.log('GoodBye ' +name);
}

// Register event Listners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//Emit events
myEmitter.emit('greet', 'Jhon');
myEmitter.emit('goodbye','Jhon');

//Error handeling
myEmitter.on('error', (err)=> {
    console.log('An Error Occured:',err);
});

//Simulate error
myEmitter.emit('error', new Error('Something Went Wrong'));
