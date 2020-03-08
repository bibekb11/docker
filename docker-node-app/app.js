const express = require ("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello from docker");
});

app.listen(3000, function(){
    console.log("Listening to port 3000");
});