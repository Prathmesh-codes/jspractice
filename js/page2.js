// Create a Variable
let num=100
console.log(num)
console.log('num =',100)
console.log('num ='+num)

//string interpolation

console.log(`num = ${num}`)

//mutable
num=200
console.log(`num = ${num}`)

//Creating immutable constants

const pi=3.14
console.log(`pi = ${pi}`)

//data type

console.log(`num = ${num}, data type = ${typeof num}`)
const s=10.5

console.log(`s = ${s}, data type = ${typeof s}`)

const big=1234523232n

console.log(`big = ${big}, data type = ${typeof big}`)

//String

const namef='Prathamesh'

console.log(`First name = ${namef}, data type = ${typeof namef}`)

//Multiple Lines

const desc=`abc, home,
Mahatma phule Chowk, Pune,
Maharashtra`

console.log(`Address = ${desc}, data type = ${typeof desc}`)

//boolean

candrive=true
console.log(`Can Drive = ${candrive}, data type = ${typeof candrive}`)

//undefined

let myvar

console.log(`My var= ${myvar}, data type = ${typeof myvar}`)

//Object

const a=null

console.log(`a = ${a}, data type = ${typeof a}`)

//object: collection of key value pairs

const person ={name:'Person 1', address:'Pune'}

console.log(`Person = ${person}, data type = ${typeof person}`)

//Dynamic type casting
num='AbraKaDabra'
console.log(`num = ${num}, data type = ${typeof num}`)

//Checking Equality
console.log("50"==50)
console.log('50'===50)

//function

function greet() //function declaration
{
    console.log("Hello from function") //function defination
}

greet() //function call


//Array

const numbers=[10,20,'a',15]
console.log(`numbers = ${numbers}, data type = ${typeof numbers}`)