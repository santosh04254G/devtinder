const express=require("express");

const app=express(); //express is a function inside express module so we can use this 

// app.use((req,res)=>{
//     res.send("hello from server")
// });

app.use("/test",(req,res)=>{  //(/test is the url route)
    res.send("helloo")
});

app.get("/user",(req,res)=>{

    res.send({firstname:"santosh",lastname:"aditya"});

});

app.post("/user",(req,res)=>{
    res.send("deleted succesfully");
});

app.delete("/user",(req,res)=>{
    res.send("deleted succesfully");
});

app.listen(3000,()=>{
    console.log("server is succesfully listening on this port");
});