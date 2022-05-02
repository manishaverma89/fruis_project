const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

//Create a new schema
const fruitSchema = new mongoose.Schema({
  name: String,

  rating: Number,

  review: String,
});

//Create mongoose model
const Fruit = new mongoose.model("Fruit", fruitSchema); //Now we're ready to create a fruit document

const apple = new Fruit({
  name: "Apple",
  rating: 8,
  review: "A great fruit",
});

//fruit.save();    //if want to save 1 fruit

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 9,
  review: "must have food",
});

const grapes = new Fruit({
  name: "Grapes",
  rating: 7,
  review: "good food",
});

// Reading from your database with Mongoose (Performing find() which we did in mongo shell)

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    console.log(fruits);
  }
});
