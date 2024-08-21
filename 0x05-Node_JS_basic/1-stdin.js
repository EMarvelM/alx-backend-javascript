process.stdin.resume()

console.log('Welcome to Holberton School, what is your name?')
process.stdin.on('data', (data) => {
  process.stdin.pause()
  console.log('Your name is:', data.toString().trim())
})

process.on('exit', () => {
  console.log('This important software is now closing')
})
