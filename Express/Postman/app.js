const express=require('express')
const app=express()
let {people}=require('../Json/data.js')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello')
})

app.post('/api/people',(req,res)=>{
    const {name}=req.body
    if (!name) {
        return res
          .status(400)
          .json({ success: false, msg: 'please provide name value' })
      }
    else{
    res.status(201).json({ success: true, data:[...people],name})
    }   
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    console.log(req.params)
    const person = people.find((person) => person.id === Number(id))
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople })
  })

app.get('/api/people',(req,res)=>{
    res.status(200).json({people})
})

app.listen(5000,()=>{
    console.log('5000...')
})