const mongoose = require('mongoose');


const chatm = mongoose.schema({

    chatname :{type:String, trim:true },

    users :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    
    admin :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    groupchat:{
        type:Boolean,
        default:false
    },
    latest:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },
    timestamp :true
})


const Chat = mongoose.model("Chat", chatm);

module.exports = Chat;