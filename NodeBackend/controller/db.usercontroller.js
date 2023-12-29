const db = require("../models");
const User = db.users;
const Admin = db.admins;

exports.create = (req, res) => {
  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    review: req.body.review,
  });

  //save to database
  user.save(user).then((data) => {
    res.send(data);
  });
};

exports.userinfo = (req, res) => {
    const obj = User.find().then((data) => {
      res.send(data);
      console.log(obj);
    });
  };


  exports.createAdmin = (req, res) => {
    const admin = new Admin({
      username: req.body.username,
      password: req.body.password,
    });
  
    //save to database
    admin.save(admin).then((data) => {
      res.send(data);
    });
  };


exports.matchAdmin = async (req, res) => {

    try {

        const username = req.body.username;
        const password = req.body.password;  
      
      const admin = await Admin.findOne({ username });
  
      if ( password === admin.password) {
        // res.json({ message: 'Admin validated' });
        res.status(200).json({ message: 'valid' });

      } else {
        res.json({ message: 'Invalid' });
        // res.json({ message1: admin.password });
    }

} catch (error) {
  res.json({ message: 'Invalid' });
  }
}
