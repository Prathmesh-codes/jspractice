class pers{

    //method that gets called everytime object is created
    constructor(name,address,phone,age)
    {
    
    console.log('Inside Constructor function')
    this.name=name
    this.address=address
    this.phone=phone
    this.age=age
    
    }
    get nameofperson(){
        return `${p1.name}`
    }

    set nameofperson(value){

        this.name=value

    }


}

const p1=new pers('Prat','Satara','+916621',21)
console.log(`Name= ${p1.name}`)

//Using get method
console.log(`Name= ${p1.nameofperson}`)

//Set method
p1.name='Ruturaj'
console.log(`Name= ${p1.nameofperson}`)
