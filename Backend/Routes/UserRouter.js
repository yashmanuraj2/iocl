const UserRouter = require("express").Router();
const User = require("../Schemas/User");
const bcrypt = require("bcrypt");

UserRouter.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(400).json("wrong password")
  
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  });
  UserRouter.post("/register", async (req, res) => {
    try {
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
      //create new user
      const newUser = new User({
        record : req.body.records,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
        Designation : req.body.Designation,
        HOD  : req.body.HOD


      });
  
      //save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err)
    }
  });

  UserRouter.get('/getRec/:name', async(req,res)=>{
  
try {
  const rec = await User.find({name:req.params.name});
  
  res.status(200).json(rec);
}

catch(err){
  res.status(500).json(err)
}
  })

  
  module.exports = UserRouter;