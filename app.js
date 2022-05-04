// Establishing Relationships and Embedding Documents using Mongoose

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

//Create a new schema

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

//Create mongoose model for fruit database

const Fruit = new mongoose.model("Fruit", fruitSchema); //Now we're ready to create a fruit document

const fruits = new Fruit({
  name: "Guava",
  rating: 10,
  review: "A great fruit",
});

// fruits.save();

const pineapple = new Fruit({
 name: "Pineapple",
 score: 10,
 review: "A very healthy fruit"
});
// pineapple.save();

const peach = new Fruit({
    name: "Peach",
    score: 9,
    review: "woww, Yumm fruit"
});
peach.save();

// Reading from your database with Mongoose (Performing find() which we did in mongo shell)

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});


// Create mongoose schema and model for person Schema


const personSchema= new mongoose.Schema({
 name : String,
 age: Number,
 favouriteFruit: fruitSchema        // favouriteFruit is having datatype of "fruitSchema"
});

// Person model
const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Manisha",
    age: 32
});
// person.save();

const bhavya = new Person({
    name: "Bhavya",
    age: 13,
    favouriteFruit: pineapple
});
// bhavya.save();

// updating favourite fruit for Manisha
Person.updateOne({name: "Manisha"}, {favouriteFruit: peach}, {age:32}, function(err){
   if (err){
       console.log(err);
   }else
   {
       console.log("successfully updated favourite fruit for Manisha");
   }
});


