// import the pets array from data.js

const pets = require("./data");

// init express app
const express = require("express");
const app = express();
​
const PORT = 8081; 
​
//should be using middle ware here I believe
app.use(express.static("public"));
​
// GET - / - returns homepage


app.get("/", (request, respond) => {
  respond.send("./index.html");
});
​
// hello world route
app.get("/api", (request, respond) => {
  respond.send("Hello World");
});
​
// get all pets from the database

app.get("/api/v1/pets", (request, respond) => {
  respond.send(pets);
});
​
// get pet by owner with query string
app.get("/api/v1/pets/owner", (request, response) => {
  const { owner } = request.query;
  console.log(`You are getting the pets owner, ${owner}`);
​
  // find the pet in the pets array
   const pet = pets.find((pet) => pet.owner === owner);
​
  // send the pet as a response
  respond.send(pet);
});
​
// get pet by name

​
app.get("/api/v1/pets/:name", (req, res) => {
  const { name } = request.params.name;
​
  // find the pet in the pets array
  const pet = pets.find((pet) => pet.name === name);
  response.send(pet);
});
​
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
​

module.exports = app;