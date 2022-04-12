var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));


const cardList = [
    {
        title: "Adder",
        image: "images/add.jpg",
        link: "http://localhost:3000/adder?num1=1&num2=2",
        desciption: "localhost:3000/adder?num1=[number]&num2=[number]"
    },
    {
        title: "Subtractor",
        image: "images/minus.jpg",
        link: "http://localhost:3000/subtractor?num1=10&num2=3",
        desciption: "localhost:3000/subtractor?num1=[number]&num2=[number]"
    },
    {
        title: "Multiplier",
        image: "images/mul.jpg",
        link: "http://localhost:3000/multiplier?num1=1&num2=2",
        desciption: "localhost:3000/multiplier?num1=[number]&num2=[number]"
    },
    {
        title: "Divisor",
        image: "images/divide.jpg",
        link: "http://localhost:3000/divisor?num1=1&num2=2",
        desciption: "localhost:3000/divisor?num1=[number]&num2=[number]"
    }
]

app.get('/api/projects',(req,res) => {
    res.json({statusCode: 200, data: cardList, message:"Success"})
})

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require("./app/routes/card.routes")(app);

var port = 3000;
app.listen(port);
console.log("server is running on: " + port);