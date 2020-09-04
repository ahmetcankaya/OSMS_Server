const express = require("express");
const path = require("path")

const app = express();
app.use(express.static('public'))

app.get("/ok", (req,res,next) =>{
    res.status(200).send('ok')
})

app.use((req,res,next) =>{
   return res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.listen(process.env.PORT||3000, ()=>{
    console.log(`AP is started on port : ${process.env.PORT||3000}`)
})