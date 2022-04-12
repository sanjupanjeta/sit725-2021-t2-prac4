module.exports = app => {
  const cards = require("../controllers/cards.controller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", cards.findAll);

  app.use("/api/cards", router);
};