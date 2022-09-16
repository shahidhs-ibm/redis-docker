const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({

    name:{
        type:"String",
        required:'Kindly enter the name of the task'
    },
    category:{
        type:String,
        required:'kidly enter the category of the task'
    },
    CreatedDate:{
        type:Date,
        default:Date.now
    },
    Status:{
        type:[{

            type:String,
            enum:['pending','Ongoing','Completed']

        }],
        default:['pending']
    }
})

module.exports=new mongoose.model('Tasks',TaskSchema)