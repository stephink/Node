const express = require('express');
const app = express();
app.use(express.json());

app.get('/concat', (req, res) => {
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

app.post('/concat/new', (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  if(!firstName || !lastName) res.status(400).send('Add proper values');
  const response = {
    firstName: firstName,
    lastName: lastName,
    fullName: firstName + ' ' + lastName,
    message: 'This is a POST call'
  };
  res.send(response)
});

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log('port started')
});
