import express from "express";
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";
import loginController from "../controller/loginController";
var passport = require("passport");

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  //path, handler
  router.get("/", homeController.handleHelloWord);
  router.get("/user", homeController.handleUserPage);
  router.get("/user", homeController.handleUserPage);
  router.post("/users/create-user", homeController.handleCreateNewUser);
  router.post("/delete-user/:id", homeController.handleDelteUser);
  router.get("/update-user/:id", homeController.getUpdateUserPage);
  router.post("/user/update-user", homeController.handleUpdateUser);

  router.get("/login", loginController.getLoginPage);
  //rest api
  //GET - R, POST- C, PUT - U, DELETE - D
  router.get("/api/test-api", apiController.testApi);

  router.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
    })
  );
  return app.use("/", router);
};

export default initWebRoutes;
