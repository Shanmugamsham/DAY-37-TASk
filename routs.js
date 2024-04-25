const routs=require("express").Router()
const fs=require("fs")
const timedateinfo = new Date();


var cdate=appentzero(timedateinfo.getDate())
var cmonth=appentzero(timedateinfo.getMonth()+1)
var cyear=timedateinfo.getFullYear()

var chour=appentzero(timedateinfo.getHours())
var cmin=appentzero(timedateinfo.getMinutes())
var csec=appentzero(timedateinfo.getSeconds())

var display="("+cdate+"-"+cmonth+"-"+cyear+")_"+"("+chour+"-"+cmin+"-"+csec+")"
var timeanddate="Date"+"("+cdate+"/"+cmonth+"/"+cyear+")"+ "Time"+"("+chour+":"+cmin+":"+csec+")"
function appentzero(value){
  return (value<10)?"0"+value:value;
}

routs.get("/data",(req,res)=>{
    try {
       
       fs.writeFile(`./file/${display}.txt`,timeanddate, (err) => {
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