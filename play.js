const connect = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput= (data) => {
    if (key === '\u0003') 
      stdin.exit();
    }
  return stdin;
}

