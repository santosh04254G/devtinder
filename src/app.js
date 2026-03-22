const express=require("express");

const app=express(); //express is a function inside express module so we can use this 

// app.use((req,res)=>{
//     res.send("hello from server")
// });

app.use("/test",(req,res)=>{  //(/test is the url route)
    res.send("helloo")
});

// after ? it is just query parameters

app.get("/user", (req, res) => {
    const userid = req.query.userid;
    const password = req.query.password;

    res.send("UserID: " + userid + " Password: " + password);
});

//: is used to create a variable (placeholder) inside the

app.get("/user/:name/:pass",(req,res,next)=>{

    console.log(req.params);

    res.send({firstname:"santosh",lastname:"aditya"});
     next();  //if u commented out 1st res.send and use next() function then it will go to second res

},
(req,res)=>{
    console.log("handling 2nd");
    res.send("2nd response"); //in terminal ur getting error because u already send the response

}

);

app.post("/user",(req,res)=>{
    res.send("deleted succesfully");
});

app.delete("/user",(req,res)=>{
    res.send("deleted succesfully");
});

app.listen(3000,()=>{
    console.log("server is succesfully listening on this port");
});