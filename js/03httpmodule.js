//import http to create a web server
const http=require('http')

//create a http server
const server=http.createServer((request,response)=>{
    console.log(`received a request`)

    //send current state of response to the client
    response.end(`This is server speaking`)
})

//starting a server
server.listen(4000,'0.0.0.0',()=>{

    console.log(`server started on port 4000`)
})