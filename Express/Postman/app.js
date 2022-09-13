const express=require('express')
const app=express()
const mongoose=require("mongoose")
const routes=require('./Routes/Peopleroutes.js')
const bookroutes=require('./Routes/BookRoutes.js')

mongoose.connect("mongodb+srv://Pratham23:XP8BKurjLMuoPwZF@Book.mongodb.net/Book?retryWrites=true&w=majority",{
  useNewUrlParser:true,
  useFindAndModify:false,
//  useUnifieTopology:true
  useUnifiedTopology:true,
  useFindAndModify:false
}).then(()=>{
  console.log("connection successful")
}).catch((err)=>console.log('no connection',err))


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/people',routes)
app.use('/book',bookroutes)


app.get('/',(req,res)=>{
  res.status(200).send('hello')
})

app.listen(5000,()=>{
    console.log('5000...')
})