
const express = require('express');

const jwt = require('jsonwebtoken');

const app = express();

const port = 3000;

//Define a secret key for signing the token
const client_secret = "abc-store-api";

// Create an API end point for generating tokens

app.get('/generate-token', (req, res) => {

 // create the token using the sign () method
 const token = jwt.sign({ client_id: 'cust-details' }, client_secret, {
  expiresIn: "1h"
 });
 //send the token back as a response
 res.send({ token });
})

//start the server
app.listen(port, () => {
 console.log(`Server listening on port ${port}`)
});

