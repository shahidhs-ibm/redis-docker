const express =require('express')
const app=express()
const mongoose=require('mongoose')
const taskModels = require('./api/models/taskModels.js')
const taskroutes=require('./api/routes/taskRoutes.js')

mongoose.connect("mongodb://localhost:27017/TaskTracker",{
  useNewUrlParser:true,
//  useUnifieTopology:true
  useUnifiedTopology:true
}).then(()=>{
  console.log("connection successful")
}).catch((err)=>console.log('no connection',err))



app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/taskRoutes',taskroutes)

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
  })

app.listen(3000,()=>{
    console.log("server is started on port 3000")
})