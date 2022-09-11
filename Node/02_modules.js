const names = require('./03_names')
const sayHi = require('./04_utlis')


sayHi(names.john)
sayHi(names.peter)
const num1=10
const num2=20

addvalue=()=>{
     console.log(num1+num2)
}

addvalue()

module.exports=addvalue