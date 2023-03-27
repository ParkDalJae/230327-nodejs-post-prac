import http from "http"
import fs from "fs"
import path from "path"
import url from "url"

function pageReadProtocol(response,path,contentType,responseCode){
    
    response.writeHead(responseCode,{'Content-Type':contentType})
    
}

const httpServer = http.createServer((req,res)=>{
    const reqUrl = fs.readFile(req.url,'utf-8',(err,data)=>{if (err) throw err})
    console.log(reqUrl)
    switch(reqUrl){
        case '/':
            res.writeHead(200,{'Content-Type':"text/html"})
            res.write('./index.html')
            res.end()
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