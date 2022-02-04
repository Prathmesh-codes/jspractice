const http=require('http')
//create a http server
const server=http.createServer((request,response)=>{
    console.log(`received a request`)

    //processing logic
    console.log(`ethod=${request.method}`)
    console.log(`Path=${request.url}`)

    if(request.method=='GET'){
        if(request.url=='/person'){
            console.log('select * from person')
        }else if(request.url=='/product'){

            console.log('select * from product')

        }

    }
    else if(request.method=='POST')
    {


        if(request.url=='/person'){
            console.log('Insert * from person')
        }else if(request.url=='/product'){

            console.log('Insert * from product')

        }

    }
    else if(request.method='PUT')
    {

        if(request.url=='/person'){
            console.log('Update from person')
        }else if(request.url=='/product'){

            console.log('Update from product')

        }

    }
    else if(request.method=='delete'){


        if(request.url=='/person'){
            console.log('Delete from person')
        }else if(request.url=='/product'){

            console.log('Delete from product')

        }
        
    }

    //send current state of response to the client
    response.end(`This is server`)
})

//starting a server
server.listen(4000,'0.0.0.0',()=>{

    console.log(`server started on port 4000`)
})