const express = require("express");
const index = require("./routes/index");

const app = express();
const port = 3000;

// Body parser is used for req.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/index", index);
app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;
/*
    Challenge:
    Create four end points to handle addition, subtraction, multiplication and division of two numbers. 
    You should be able to pass two numbers via query string to any of the four routes.
    Return a json object with the answer.
*/
