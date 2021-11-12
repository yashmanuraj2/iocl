const RecordRouter = require("express").Router();
const Record = require("../Schemas/Record");
const User = require("../Schemas/User");
RecordRouter.post("/add", async (req, res) => {
    try {
      //generate new password
     
  
      //create new user
      const newUser = new Record({
        application_name: req.body.name,
        purpose: req.body.purpose,
       
        created_by: req.body.role,
        created_at : req.body.time,
        is_approved: req.body.is_approved,
        admin_status: req.body.admin_status,
        admin_approved_on:req.body.approved


      });
  
      //save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err)
    }
  });

  RecordRouter.put("/add/:name", async (req, res) => {
try{
  const user = await User.findOne({ name : req.params.name});
  console.log(user) 
   await user.updateOne({$push:{records:req.body}});
  res.status(200).json("record updated");
}

catch(err){
  res.status(500).json(err);
}

  } );

  

  module.exports = RecordRouter;