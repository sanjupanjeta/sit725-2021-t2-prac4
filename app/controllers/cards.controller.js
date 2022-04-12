const db = require("../models");
const Card = db.cards;

exports.findAll = (req, res) => {
  
  Card.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};