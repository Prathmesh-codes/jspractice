//import the file system package
const fs = require('fs')


//synchronous function
//blocking APIs
function function1()
{

   console.log(`reading file started`)
   const data=fs.readFileSync('./myfile.txt') 
   console.log(`reading file finished`)
   console.log(''+data)


   console.log(`math operation started`)
   const n1=12
   const n2=1231
   const mult=n1*n2
   console.log(`math operation finished`)
   console.log(`mult=${mult}`)
}

// function1()


//asynchronous function 
//non blocking APIs

function async()
{
    console.log(`reading file started`)
    fs.readFile('./myfile.txt',(error,data)=>{ 
    console.log(`reading file finished`)
    // console.log(''+data)

    //error while reading the file
    if(error){
        console.log(`error occured while reading the file`)
        console.log(error)
    }

    else{
        console.log(`data: `+data)
    }
    })

    console.log(`math operation started`)
    const n1=12
    const n2=1231
    const mult=n1*n2
    console.log(`math operation finished`)
    console.log(`mult=${mult}`)


}
async()