console.log("Shri ram institute of technology")
console.log("shweta patel");
console.log("i love javascripts")

// <----------------------------------------------------------->

// variable

// age = 24;
// console.log(age)

price = 99.9;
console.log(price)

x = null;
console.log(x)

y = undefined;
console.log(y) 

fullname = "Tony Stark";
// console.log("fullname");
console.log(fullname);

// isFollow = true;
isFollow = false;
console.log(isFollow)

// it is a dynamically typed lanuage

fullname = 25;
console.log(fullname);

// that is not a correct way to write variable  we always use LET, CONST, VAR

let Name = "shweta patel";
let age = 24;

console.log(Name);
console.log(age);   // ES6 concept (new standard variable)--- LET, CONST

// <-------------------------->

var ages = 24;
var ages = 44;
var ages = 56;

console.log(ages);

// let age = 33; // error not redeclared

// const b;
const b = 3;
console.log(b)

{
    let c = 556;
    // let c = 6;
    console.log(c)
}
{
    let c = 46556;
    console.log(c);
}

// ----------------------------------------------------------------------------------

// Data Type 
/*
1. Primitive datatype ---> 1. Number
                           2. String 
                           3. Boolean
                           4. Undefined
                           5. Null
                           6. Bigint
                           7. Symbol
*/

let ag = 24;
console.log(typeof(ag));
/*
2. non-primitive--- > it is collection of primitive type and create a object . stored data in key value pair

*/

const student = {
    Name : "Rahul kumar",
    age : 24,
    CGPA : 8.2,
    isPass : true
}

console.log(student);
console.log(typeof(student));
console.log(student["Name"])
console.log(student.Name)

student["Name"] = "Rahul Sharma";
console.log(student["Name"]);


const product = {
    title : "Ball pen",
    rating : 4,
    offer : 5,
    price : 270
};

console.log(product)

const Profile = {
    username : "@shraddha patel",
    isFollow : false,
    Followers : 123,
    Bio : "something about you"
};

console.log(typeof(Profile))
console.log(typeof Profile["username"])
console.log(typeof Profile["isFollow"])
console.log(typeof Profile["Followers"])
console.log(typeof Profile["Bio"])

// -------------------------------------------------------------------------------------------
/** Commenet in JS 
 * //---> Single line comment
 */ 
// --> multiline commment

// this is comment

/*
   this 
   is 
   a multiline 
   comment
*/
// -------------------------------------------------------------------------------------------

// Operators in JS ---> used to perform some operation on data

// Artimetic Operators
// let n1 = 5;
// let n2 = 2;

// console.log("n1= ", n1, " n2 = ", n2);
// console.log("n1 + n2  = ", n1+n2);   // addition
// console.log("n1 - n2  = ", n1-n2);   // subtraction
// console.log("n1 * n2  = ", n1*n2);   // multiplication
// console.log("n1 / n2  = ", n1/n2);   // division
// console.log("n1 % n2  = ", n1%n2);   // modulo

// unaray operator
// console.log("n1= ", n1, " n2 = ", n2);

// n1 = n1 + 1; // 6 post incre
// n1++;        //6
// n1 = n1 - 1;    //4 post decre
// n1--;        //4

//Post and Pre increment and decrement

// console.log("++n1 = ", ++n1); //pre incre
// console.log("n1 = ", n1)

// console.log("--n1 = ", --n1); //pre dec
// console.log("n1 = ", n1)

// ---------------------------------------------------------------------------------------------

// Assignment Opertaors ==> =, +=, -=, *=, %=, **=

// let n1 = 5;
// let n2 = 2;

// n1 += 4; // n1 = n1 + 4
// console.log("n1 = ", n1); // 9

// n1 -= 4; // n1 = n1 - 4
// console.log("n1 = ", n1); // 1

// n1 *= 4; // n1 = n1 * 4
// console.log("n1 = ", n1); // 20

// n1 /= 4; // n1 = n1 / 4
// console.log("n1 = ", n1); // 1.25

// n1 %= 4; // n1 = n1 % 4
// console.log("n1 = ", n1); // 1

// --------------------------------------------------------------------------------

// Comparison Operators
/*
== ---> Equal to       === ---> Equal to & type
!= ---> Not Equal to   !== ---> Not equal to & type

> , >=, < , <=  same as other programming language

*/

let n1 = 5;
// let n2 = 2;
let n2 = 5;
// let n2 = "5";

// console.log("n1 == n2", n1 == n2);  // false
console.log("n1 != n2", n1 != n2);     // true
console.log("n1 == n2", n1 == n2);     // true  n2 = "5"
console.log("n1 === n2", n1 === n2);     // true  n2 = "5"
console.log("n1 !== n2", n1 !== n2);     // true  n2 = "5"

// ---------------------------------------------------------------------------------------------

// Logical Operators --> &&(AND) , ||(OR), !(NOT)

let r = 6;
let s = 5;

// let cond1 = r > s; //true
// let cond2 = r === 6; // true
// console.log("cond1 && cond2 = ", cond1 && cond2);

// let cond1 = r > s; //true
// let cond2 = r === 5; // false
// console.log("cond1 && cond2 = ", cond1 && cond2);
// console.log("cond1 && cond2 = ", r < s && s == 6);

// console.log("cond1 && cond2 = ", r < s || s == 6);   //false
// console.log("cond1 && cond2 = ", r > s || s == 3);  // true
// console.log("cond1 && cond2 = ", r != s || s == 9); //true

console.log("!(6<5) = ", !(r < s));  // true
console.log("!(6<5) = ", !(r === 6));  // false

// -------------------------------------------------------------------------------------------------


