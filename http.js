const http= require("node:http")

const server= http.createServer((req, res)=>{
    console.log("request received")

    res.end("hola mundo")
})

server.listen(0, ()=>{
    console.log("server listening in the port")
})