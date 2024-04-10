 const express=require("express")
 const app=express()
 const routs=require("./routs")
 app.use(express.json())
 app.use(routs)
 app.listen(3000,()=>{
    console.log("Click Here :" + "http://localhost:3000")
 })
 
