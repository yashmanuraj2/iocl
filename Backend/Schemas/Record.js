const mongoose = require('mongoose');
const User = require('./User')


const RecordSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        

    },

    application_name :{
 type: String,
default: '',
    },
    
purpose :
{

    type: String,
    default:''
},


created_by: {

    type:Number,
  
},
created_at: {
    type: Date,
    default: Date.now
},
is_approved:
{
    type : Number,
    enum : [0,1,-1],
    default : 0
},  

admin_status:{

    type: Number,
    enum: [0,1,-1],
    default: 0
},
admin_approved_on: {
type: Date,
default: Date.now,

},

admin_reject_reason: {  

    type: String,

},


ip_address: {
    type: String,
}
},
{timestamps:true}
);

module.exports = mongoose.model('Record', RecordSchema);



