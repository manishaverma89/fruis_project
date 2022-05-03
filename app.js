const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

//Create a new schema
// Data  validation with Mongoose

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Check your data entry, no name specified!"]
  },
    rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

//Create mongoose model
const Fruit = new mongoose.model("Fruit", fruitSchema); //Now we're ready to create a fruit document

const fruits = new Fruit({
  name: "Peach",
  rating: 10,
  review: "A great fruit",
});

fruits.save();

// Reading from your database with Mongoose (Performing find() which we did in mongo shell)

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
