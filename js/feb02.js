function function1()
{
    const num1=15
    const num2=13
    console.log(`multiplication=${num1*num2}`)
}

    function function2()
{
    const num1=15
    const num2=13
    console.log(`division=${num1/num2}`)
}

//sequential programming
//synchronous programming
function1()
function2()

//async programming
//non blocking API

//#1 Promises 
//states 
//-pending (default state)
//-resolved (successful)
//-rejected (error/unsuccessful)
//to create use promise()

function fun1()
{
    const promise = new Promise(function(resolve,reject){
    //logic here 

    console.log(`performing an action`)
    setTimeout(()=>{
        resolve()

    },5000)
  
    //reject()
    })
    
    
    
    promise
    .then((status)=>{console.log(`success`)})
    .catch((error)=>{console.log(`error`)})
}

fun1()

function fun2(){
    console.log(`inside function 2`)
}
fun2()








