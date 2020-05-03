const addition = (req, res) => {
   // localhost:3000/index/add?num1=1&num2=2
   let answer = {
      RequestType: "Addition",
      RequestValues: [req.query.num1, req.query.num2],
      Calc: parseInt(req.query.num1) * parseInt(req.query.num2),
   };
   console.log(answer);
   res.send(answer);
};
const subtraction = (req, res) => {
   // localhost:3000/index/sub?num1=1&num2=2
   let answer = {
      RequestType: "Subtraction",
      RequestValues: [req.query.num1, req.query.num2],
      Calc: parseInt(req.query.num1) - parseInt(req.query.num2),
   };
   console.log(answer);
   res.send(answer);
};
const multiplication = (req, res) => {
   // localhost:3000/index/mult?num1=1&num2=2
   let answer = {
      RequestType: "Multiplication",
      RequestValues: [req.query.num1, req.query.num2],
      Calc: parseInt(req.query.num1) * parseInt(req.query.num2),
   };
   console.log(answer);
   res.send(answer);
};
const division = (req, res) => {
   // localhost:3000/index/div?num1=1&num2=2
   let answer = {
      RequestType: "Division",
      RequestValues: [req.query.num1, req.query.num2],
      Calc: parseInt(req.query.num1) / parseInt(req.query.num2),
   };
   console.log(answer);
   res.send(answer);
};

module.exports = {
   addition,
   subtraction,
   multiplication,
   division,
};
