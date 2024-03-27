 const http=require("http")
 const fs=require("fs")
 const date=new Date().getDate()
 const month=new Date().getMonth()
 const year=new Date().getFullYear()
 const house=new Date().getHours()
 const munite=new Date().getMinutes()
 const second= new Date().getSeconds()
 const date_time=`Date:${date}/${month}/${year} Time:: ${house}hr-${munite}m-${second}s`
 
 const server=http.createServer((req,res)=>{
   fs.writeFile("date_time.txt",date_time,()=>{
      console.log(" Date and time update : "+ date_time)
      
   })
   fs.readdir(__dirname,(err,file)=>{
      file.forEach((d)=>{
         console.log(`File name : ${d}`);
      })
    })
   res.setHeader("content-type","text/html")
    res.write("<p>  welcome  this is current time<p/>")
    res.write(`${date_time}`)
    res.end();

 })
 server.listen(3000,()=>{
    console.log("Click Here :" + "http://localhost:3000")
 })
 
