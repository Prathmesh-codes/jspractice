class p{
    constructor(){
        console.log(`Person class`)
    }

    printsuper(){
        console.log(`Inside super class printmethod`)
    }
}

//subclass
class student extends p{

    constructor(){

        //person class constructor
        super()

        console.log(`Student class constructor`)
    }

    //overriden method
    printsuper(){
        console.log(`Inside sub class printmethod`)
    }

}

const k=new p()
const l=new student()

k.printsuper()
l.printsuper()