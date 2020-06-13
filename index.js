const express = require('express');
const app = express();
app.use(express.json());

app.get('/contact', (req, res) => {
  const firstname = req.param('firstName');
  const lastname = req.param('lastName');
  if (!firstname || !lastname) res.status(400).send('Add proper values');
  const responses = [
    { 
      firstName: firstname,
      lastName: lastname,
      fullName: firstname + ' ' + lastname,
      message: 'This is a GET call'
    }
  ]

  res.send(responses);

});

app.post('/contact/new', (req, res) => {
  const response = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fullName: req.body.firstName + ' ' + req.body.secondName,
    message: 'This is a POST call'
  };
  res.send(response)
});

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log('port started')
});
