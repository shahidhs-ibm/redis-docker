const express = require('express')
const logger =require('./logger')
const app = express()

app.use(logger)
app.get('/',logger,(req,res)=>{
    res.send('home')
})

app.get('/about', (req, res) => {
    res.send('About')
  })



app.listen(5000,()=>{
    console.log('Server is listening on port 5000....')
})
