function function1(){
    const url='https://jsonplaceholder.typicode.com/todos'
    fetch(url)
    
    
    .then((response)=>{
        console.log(response)
    })

    .catch((error)=>
    {
        console.log(error)
    })

}
function1()

function function2()
{

    const url='https://jsonplaceholder.typicode.com/todos'
    axios.default.get(url).then((response)=>{
        console.log(response)
    })

    .catch((error)=>{
        console.log(error)
    })

}
function2()