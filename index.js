 const express=require("express")
//  const fs=require("fs")
 const app=express()
 const routs=require("./routs")
 app.use(express.json())
 app.use(routs)
//  const timedateinfo = new Date();
//  const time = timedateinfo.toLocaleTimeString("en-US", {
//    hour12: false,
//  });
// const trimmedTime = time.split(":").join("_");
// const date = timedateinfo.toLocaleDateString();
// const trimmedDate = date.split("/").join("");
// const fileName = trimmedDate + "-" + trimmedTime;






//  app.use("/create",(req,res)=>{
//    try {
      
//       fs.writeFile(`./file/${fileName}.txt`, time, (err) => {
//          if (err) {
//             res.status(400).send(`try again`)
//          }
//          else {
//            res.status(200).send(`Filename has been created`)
   
//          }
//        });
//    } catch (error) {
//       res.status(400).send(`server error`)
//    }
 

  
//  })

// app.use("/retrieve",(req,res)=>{


// try {
   
//    fs.readdir("./file", (err, files) => {
//       if (err) {
//         console.log(err);
//       } 
//       else {
//         files.forEach((file) => {
         
//          console.log(file);
         
//          fs.writeFile(`./retrieve/${file}`, time, (err) => {
//             if (err) {
//                res.status(400).send(`try again`)
//             }
//             else {
//               res.status(200).send(`File has been retrieved  to retrieve folder`)
      
//             }
//           });
          
//         });
//       }
//     });
   
// } catch (error) {
//    res.status(400).send(`server error`)
// }

// })












 app.listen(3000,()=>{
    console.log("Click Here :" + "http://localhost:3000")
 })
 
