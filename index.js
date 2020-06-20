const express = require('express');
const app = express();
const cors = require('cors');

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/person';
const mydb='person';
const client = new mongo(url);
const assert = require('assert');

app.use(express.json());
app.use(cors());

app.post('/concat/new', (req, res) => {
  var item = {
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }
  client.connect((err,client) => {
    assert.equal(null, err);
    const db=client.db(mydb);
    const col=db.collection('member');
    col.find(item).toArray((err,result)=>{
      assert.equal(null,err);
      if(result.length>0){
        res.send("already exist");
      }
      else{
        col.insertOne(item, (err, result) => {
          assert.equal(null, err);
          console.log(result);
          
          res.send(result.ops);
        })
        client.close();

      }
      
      
    })

  })  
});

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log('port started')
});
