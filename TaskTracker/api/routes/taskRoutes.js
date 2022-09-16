const express=require('express')
const {
    getAllTasks,
    createTask,
    getTaskById,
    editTaskById,
    deleteTaskById
} =require('../controllers/taskController.js')

const taskRouter=express.Router()

taskRouter.get('/',getAllTasks)
taskRouter.post('/',createTask)

taskRouter.get('/:id',getTaskById)
taskRouter.put('/:id',editTaskById)
taskRouter.delete('/:id',deleteTaskById)

module.exports=taskRouter