const mongoose=require("mongoose")

const BookSchema =new mongoose.Schema({

    BookName:{
        type:String,
        required:true,
        
    },
    AuthorName:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        validate(value){
            if(value < 0) throw new Error("Price cannot br in negative")
        }
    },
    timestamp:{
        type:Date,
        default: Date.now
    }


})
//bookcollection is class
const Bookcollection = new mongoose.model("Book",BookSchema)

module.exports=Bookcollection