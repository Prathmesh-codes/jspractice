//Create a class to create object

class person{

//method that gets called everytime object is created
constructor(name,address,phone,age)
{

console.log('Inside Constructor function')
this.name=name
this.address=address
this.phone=phone
this.age=age

}

canVote(){
    if(this.age>=18){
        console.log(`${this.name} is eligible for voting`)
    }
    else{
        console.log(`${this.name} is not eligible for voting`)
    }
}

printinfor(){

    console.log(`name: ${this.name}`)
    console.log(`address: ${this.address}`)
    console.log(`phone: ${this.phone}`)
    console.log(`age: ${this.age}`)

}

}

//Instantiate the class
//Create an object of a class
const a=new person(`person1`,'ind','+91231',10)
a.canVote()

const b=new person('p2','Satara','+913131',30)
b.canVote()

a.printinfor()
b.printinfor()

