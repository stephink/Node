const express=require('express');
const app=express();
app.use(express.json());

app.get('/contact',(req,res)=>{
    const firstname1=req.param('firstName');
    const lastname2=req.param('lastName');
    if(!firstname1||!lastname2)res.status(400).send("Add proper values");
    const responses=[
        {firstname:firstname1,lastname:lastname2,fullname:firstname1 +" "+ lastname2,message:"This is a GET call"}
        
    ]

    res.send(responses);

});

app.post('/contact/new',(req,res)=>{
    const newone={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        fullName:req.body.firstName+" "+req.body.secondName,
        message:"This is a POST call"
    };
    responses.push(newone)
    res.send(newone)

});

const port= process.env.PORT || 4444 ;
app.listen(port,()=>{
    console.log('port started')
});
