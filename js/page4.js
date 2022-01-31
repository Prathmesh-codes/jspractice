function f1(){
    const person1={
        firstName:'Prathmesh',
        lastname:'babar'

    }
console.log(person1)

//dot syntax

console.log(`first name=${person1.firstName}`)
console.log(`last name=${person1.lastname}`)

//Using [] 

console.log(`firstName=${person1['firstName']}`)
console.log(`LastName=${person1['lastname']}`)




// adding a new key

//using dot

person1.company='Google'
console.log(person1)

//using []

person1['age']=21
console.log(person1)

//get all properties of object

const keys=Object.keys(person1)
console.log(keys)

//iterate to get all values

for(const key of keys){
    console.log(`key=${key}, value=${person1[key]}`)
}

//using for in loop

for(const key in person1){

    console.log(`key=${key}, value=${person1[key]}`)

}

//propertyDescriptor

console.log('Information about name of the person')
console.log(Object.getOwnPropertyDescriptor(person1,'firstName'))


}

f1()

