const express= require("express")
const app= express()
app.disable("x-powered-by")
app.use(express.json())
const port= process.env.PORT ?? 1234

app.get("/", (req, resp)=>{
    resp.status(200).send("Mi pagina de inicio")    
})

app.post("/post", (req, res)=>{
    res.status(201).send(req.body)
})
//este va servir para tratar los posibles errores de los headers

app.use((req, resp)=>{
    resp.status(404).send("url not found 404")
})

app.listen(port, ()=>{
    console.log(`listening in the port :${port}`)
})

