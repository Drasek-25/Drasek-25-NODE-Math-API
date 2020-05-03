const express       = require('express');

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;

/*
    Challenge:
    Create four end points to handle addition, subtraction, multiplication and division of two numbers. 
    You should be able to pass two numbers via query string to any of the four routes.
    Return a json object with the answer.
*/