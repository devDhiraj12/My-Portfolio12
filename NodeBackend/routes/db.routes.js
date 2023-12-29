module.exports = (app) => {
  const router = require("express").Router();
  const users = require("../controller/db.usercontroller");
  const admins = require("../controller/db.usercontroller");

  router.post("/saveData", users.create);
  router.post("/createAdmin", admins.createAdmin);
  router.post("/matchAdmin", admins.matchAdmin);

  router.get("/userinfo",users.userinfo)

  app.use("/api", router);
};
