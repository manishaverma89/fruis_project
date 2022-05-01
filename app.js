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
    review: "A great fruit"
});
//fruit.save();    //if want to save 1 fruit

//To save many fruits, use Fruit.insertmany() function
const kiwi = new Fruit({
name: "Kiwi",
rating: 9,
review: "must have food"
});

const grapes = new Fruit({
    name: "Grapes",
    rating: 7,
    review: "good food"
    });


Fruit.insertMany([apple, kiwi, grapes], function(err){
    if(err){
        console.log(err);
     }
     else{
         console.log("successfully saved all the fruits to fruitDB");
     }

}); 

// create a new schema for a Person
 const personSchema = new mongoose.Schema({
     name: String,
     age: Number
 });

// create a mongoose model
const Person = new mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});
person.save();


