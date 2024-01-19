
const express = require('express');

const jwt = require('jsonwebtoken');

const app = express();

const port = 8000;


//Define a secret key for signing the token
const client_secret = "abc-store-api";

// Create an API end point for generating tokens

app.get('/protected', (req, res) => {
 // Get the token from the request headers
 // console.log(req.headers.authorization)
 const token = req.headers.authorization.split(" ")[1];
 console.log("token", token);
 // verify the token using the verify () method
 jwt.verify(token, client_secret, (err, decoded) => {
  if (err) {
   return res.status(401).send('Invalid token');
  }
  // if the token is valid,return the protected data
  res.send(`Hello, This API... !This is protected data...`);
 })

})

// if the token is valid, return the protected data. 
app.listen(port, () => {
 console.log(`Server listening on port ${port}`)
});
