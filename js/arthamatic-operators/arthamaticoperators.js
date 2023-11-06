//arthamatic operators:-

let  a = 10;
let  b = "20";

console.log(a+b)

b = parseInt(b)//parseInt( )  is used to conver string number into normal number

console.log(a-b)

//discount in amazon using maths
//division , subtraction

let orginalPrice="69990";
let discount = 10;

let discountPrice=parseInt(orginalPrice)/discount;

console.log(discountPrice)

let sellingPrice = parseInt(orginalPrice)-discountPrice

console.log(sellingPrice);

orginalPric="99900.2";

console.log(parseFloat(orginalPrice))

//addition, multiplication

let aaa=25;
let bbb=35;

let addition = aaa+bbb;

console.log(addition)

//multiplication

let aaaa=225;

let bbbb=35;


 let multiplication=aaaa+bbbb;

console.log(multiplication)


//percentage:-

//let multiplication = aaaa%bbbb;
//console.log(multiplication)


//icrememt:-

let ab=25;
let bc=45;

//ab=ab+1;
//or
ab+=1 //short-cut for increments by adding 1  we can use it all maths as multipication,sbutracion,division

console.log(ab)


let ad=25;
ad++;
console.log(ad)


let add=25;
add++;

console.log(add)

//post increment, post decrement, pre increment:-

// let add=25;
// add++;//post increment
// add--; //post decrement
// console.log(add)

//let addd=250;
//let bddd=++addd; //pre increment  // here 1 is adding for 250 ,so total =251

//let cddd=++bddd; //pre increment //here 1 is adding to the total(251), so total = 252

//console.log(cddd) 

// silialry to pre decrement also as well as all arthamtic operators;


let addd=250;
let bddd=--addd; //pre decrement  // here -1 is subtractiing for 250 ,so total =249

let cddd=--bddd; //pre decrement //here 1 is subtracting to the total(249), so total = 248

console.log(cddd) 



