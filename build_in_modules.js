const os =require('os')
console.log(os.hostname())
console.log(os.userInfo())
console.log(os.uptime())
console.log(os.release())

const path=require('path')
console.log(path.sep)
const absolute = path.resolve(__dirname,'node&express','03_names.js')
console.log(absolute)

