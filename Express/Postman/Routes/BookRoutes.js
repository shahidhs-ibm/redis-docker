const express = require('express')
const bookrouter=express.Router()


  bookrouter.get('/',(req,res)=>{
    res.send("all books")
  })

  bookrouter.post('/',(req,res)=>{
    res.json({data : "book is stored"})
  })

  bookrouter.get('/:id',(req,res)=>{
    res.send(`single book of ID:${req.params.id}`)
  })

  bookrouter.patch('/:id',(req,res)=>{
    res.send(`single book of ID:${req.params.id}  to update`)
  })

  bookrouter.patch('/:id',(req,res)=>{
    res.send(`single book of ID:${req.params.id}  to delete`)
  })

  module.exports = bookrouter