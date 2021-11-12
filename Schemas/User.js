var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({



    records: {

        type:Array,
        default:[]
    }
      
    
    

    ,

    id:
    {

        type:mongoose.Schema.Types.ObjectId,
       
    },
    name: {
        type: Number,
        
    },
    email: {
        type: String, 
        required: true,
       
    },
    password:{

    
    type: String,
  
 
    },
    role : 

    {
        type: String,
            
 
    },

    Designation:{
        type:String,
       
    },
    HOD : {
        type : Number,
        
    }
});

module.exports=mongoose.model('User', UserSchema);