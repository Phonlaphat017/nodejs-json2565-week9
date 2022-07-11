const http = require('http')
const msg = require('./message.js')

const host = "localhost"
const PORT = process.env.PORT || 5000
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"Text/plain"})
    res.write(`${msg.message}`)
    res.end()
})

server.listen(PORT,()=>{
    console.log(`Start server runnibg at http://${host}:${PORT}`)
})