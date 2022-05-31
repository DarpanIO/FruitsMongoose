                                                // Mongoose Cheatsheet


// Importing & Connecting Mongoose with mongodb database
const mongoose =require("mongoose")
mongoose.connect("mongodb://localhost:27017/fruitsDB");


// Creating Schema 
const fruitSchema= new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});
const personSchema= new mongoose.Schema({
    name: String,
    age: Number
});


// Creating Model 
const Fruit = mongoose.model("Fruits",fruitSchema);
const Person = mongoose.model("Person",personSchema);


// Creating Documents with the help of Model 
const fruit = new Fruit({
    name:"Apple",
    rating:7,
    review:"An a apple a day keeps a doctor away"
}
);
const person = new Person({
    name:"Darpan",
age:19
})



// Saving the document in Database
fruit.save();
// person.save()


// Inserting many Documents at Same Time in a database
const Mango = new Fruit({
    name:"Mango",
    rating:8,
    review:"A delicious Fruit available in summer"
});
const Orange = new Fruit({
    name:"Orange",
    rating:9,
    review:"Sour but healthy"
}
);
Fruit.insertMany([Mango,Orange],function(err){
    if(err)
    console.log(err);
    else
    console.log("Successfully inserted fruits");
})


// Deleting Many documents
Person.deleteMany({name:"Darpan"},function(err){
    if(err)
    console.log(err);
    else
    console.log("Success");
});
person.save()


// Displaying Data 
Fruit.find(function(err,fruits){
    if(err)
    console.log(err);
    else{

// Closing Connection 
mongoose.connection.close(function(){
    console.log('Mongoose default connection disconnected');
    });
        // mongoose.disconnect();


        fruits.forEach(function(fruit){
            
            console.log(fruit.name);
        }
        )

        
    }
})