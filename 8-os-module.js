const os = require('os')

// Info about current user

const user = os.userInfo()
// console.log(user);

// system uptime in seconds
console.log(`the System uptime is ${os.uptime()} seconds`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}
console.log(currentOs)
