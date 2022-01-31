//objects
//by using literals



function a()
{
const person={
    name : 'person1',
    address: 'Satara',
    phone: '+919890456'
}

console.log(`type of person=${typeof person}`)
console.log(person)
}

a()



function b()
{
const mobile={
    //key: value(string)
    model : '1+ 9RT',
    Company: '1+',
    

    //key:value (number)
    price : 170000,

    //key:value (object)
    configuration:{
    ram:'8 Gb',
    storage:'1TB'
    },

     //key:value (boolean)
     availabe:true,
}

console.log(mobile)
}
b()


//Object Literal Shorthand

function func(firstname,lastname,address,age){
    const person1={
        firstname:firstname,
        lastname:lastname,
        address:address,
        age:age,
    }

    console.log(person1)


    const person2={
        firstname,
        lastname,
        address,
        age,

    }
    console.log(person2)
}

func('bill','sas','ind',67)
