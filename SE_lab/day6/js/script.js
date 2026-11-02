console.log("My name is Shreya");

// var - globle scop  - redeclare , update(assing)
// let - block scop - update, redeclare(x)
// const - block scop update (x) , redeclare(x)

// -------- var ----------
// var a = 10;
// console.log(a);
// var a = 30;
// console.log(a);
// a = 60;
// console.log(a);

// ------ let --------
// let a = 30;
// console.log(a);
// a = 40;

// ------- const -------
// const  fullName = "vishal"
// console.log(fullName);
 // ---data type----
 // 1.)primitive data type
 // a) number
 // let a=44
 //b.) string
 //let name = "rajesh"
 //c)boolean (true,false)
 //d) NULL
//  let b= null
//  console.log(null)
 //e)undefined
 //let c;
 //console log(c);
 //2.)non-primitive data type
 //a.)Array 
 //b.)object
 //c.)function
 //let array =[12,3,33,44,"shreya",null,undefined,{name:"raj"}] //mixed data type
 let arr =[ 22,44,22,55,33,34]
 //console.log(arr[3]);
 //console.log(arr.length);
 //push
 arr.push(25)
 console.log(arr);

 //pop
 arr.pop(34)
 console.log(arr);
 //unshift
 arr.unshift(59)
 console.log(arr);
 //shift
 arr.shift()
 console.log(arr);

 

//---------function---------

// // 1.) function declaration
// function sum(){
//     //code

// }

// 
// function add(){
//     console.log("add function");
// }
// add()

add(22,45)
function add(a,b){
    console.log("a+b")
}
add()
// // 2.) function expression
// const expressFn = function(){

// }

var expressFn = function (a,b){
    console.log(a+b)
}
expressFn(22,45)


// // 3.) arrow function
// const arrowFn = ()=> {
//     //code
// }

const arrowFn =(raj, mohit, shreya)=>{
    console.log(raj+mohit+shreya);
}
arrowFn(22,23,44)


// // 4.) IIFE (imediate invoked function expression)
// (function (){
//     //code
// })()

console.log("Hello ");

(function(c ,g){
    console.log(c+g);
})
(23,55)