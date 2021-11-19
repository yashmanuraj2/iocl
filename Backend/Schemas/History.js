const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({


    records :{
  type : Array,
  default : true



    },

 Users : {
type : Array,
default : true


},
    },
    {timestamps:true}
);

module.exports = mongoose.model('History', HistorySchema);