const mongoose =require("mongoose")
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema= new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});
const Fruit = mongoose.model("Fruits",fruitSchema);
const fruit = new Fruit({
    name:"Apple",
    rating:7,
    review:"An a apple a day keeps a doctor away"
}
);
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
// fruit.save();
// Fruit.insertMany([Mango,Orange],function(err){
//     if(err)
//     console.log(err);
//     else
//     console.log("Successfully inserted fruits");
// })

const personSchema= new mongoose.Schema({
    name: String,
    age: Number
});
const Person = mongoose.model("Person",personSchema);
const person = new Person({
    name:"Darpan",
age:19
})
// person.save()
Person.deleteMany({name:"Darpan"},function(err){
    if(err)
    console.log(err);
    else
    console.log("Success");
});
person.save()

Fruit.find(function(err,fruits){
    if(err)
    console.log(err);
    else{
        
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