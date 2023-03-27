const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("path")




const httpServer = http.createServer((req,res)=>{
    const reqUrl = req.url
    console.log(reqUrl)
    switch(reqUrl){
        case '/':
            res.writeHead(200,{'Content-Type':"text/html"})
            res.write(reqUrl)
            res.end(fs.readFile(reqUrl+'index.html',"utf-8",(err,data)=>{
                if (err) { console.log("삐삐삑")}
                else{
                    
                }
            }))
            break;
        }
})
httpServer.listen(2080,err=>{
    if(err){
        console.log("에러나쓰요")
    }else{
        console.log("안나쓰요")
    }}
    )