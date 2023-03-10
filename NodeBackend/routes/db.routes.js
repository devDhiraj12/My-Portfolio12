module.exports = (app) => {
  const router = require("express").Router();
  const users = require("../controller/db.usercontroller");

  router.post("/saveData", users.create);

  router.get("/userinfo",users.userinfo)


  // router.get('/getSingleUser/:id',users.find)

  // router.put("/update/:id",users.update)

  // router.post("/delete/:id",users.delete)

  app.use("/api", router);
};
