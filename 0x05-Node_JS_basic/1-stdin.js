const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Welcome to Holberton School, what is your name?');

rl.question('', (data) => {
  console.log('Your name is:', data);
  rl.close()
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
