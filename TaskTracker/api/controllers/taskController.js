const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const taskModel=require('../models/taskModels.js')


const getAllTasks=async(req,res)=>{
    const tasks=await taskModel.find({})
    try{
        res.status(200).send(tasks)

    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

const createTask= async(req,res)=>{
    
    try{
        
        var task=new taskModel(req.body)
        await task.save()
        res.status(200).send(task)
    }
    catch(error)
    {
        res.status(500).send(error)
    }

}
const getTaskById=async(req,res)=>{
    try{
    const task= await  taskModel.findById(req.params.id)
    res.json(task)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

const editTaskById= async(req,res)=>{
    try{
         const edited_task=await taskModel.findByIdAndUpdate(req.params.id,req.body)
         if(!edited_task)
         {
            res.send('No task found')
         }
    }   
    catch (error) {
        res.status(500).send(error);
      }

    res.send(`single task of ID:${req.params.id} is Updated`)

}

const deleteTaskById=async(req,res)=>{

    try{
        const data =await taskModel.findByIdAndDelete(req.params.id)
        if(!data)
        {
            res.send("No task found");
        }
    }
    catch(error){
        res.status(500).send(error);
        

    }
 
    res.send(`single task of ID:${req.params.id} is Deleted`)    

}

module.exports={
    getAllTasks,
    createTask,
    getTaskById,
    editTaskById,
    deleteTaskById
}