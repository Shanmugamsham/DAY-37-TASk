const routs=require("express").Router()
const fs=require("fs")
const timedateinfo = new Date();
 const time = timedateinfo.toLocaleTimeString("en-US", {
   hour12: false,
 });
const trimmedTime = time.split(":").join("_");
const date = timedateinfo.toLocaleDateString();
const trimmedDate = date.split("/").join("");
const fileName = trimmedTime;



routs.get("/data",(req,res)=>{
    try {
       
       fs.writeFile(`./file/${fileName}.txt`, time, (err) => {
          if (err) {
             res.status(400).send(`try again`)
          }
          else {
            res.status(200).send(`File has been created`)
    
          }
        });
    } catch (error) {
       res.status(400).send(`server error`)
    }
  
 
   
  })

  routs.get("/retrieve",(req,res)=>{


    try {
       fs.readdir("./file", (err, files) => {
          if (err) {
            res.status(400).send(`try again`)
          } 
          else {

            res.status(200).send(`Retrieve Files:   ${files}    `)

            
          }
        });
       
    } catch (error) {
       res.status(400).send(`server error`)
    }
    
    })
    
    





module.exports=routs