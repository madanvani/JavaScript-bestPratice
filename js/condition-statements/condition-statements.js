let logginUserId = 100;

let viewUserId = 120;

let logginUserId1 = 100;

let viewUserId1 = 100;

//console.log(logginUserId == viewUserId)

let isSame = logginUserId == viewUserId;

let isSame1 = logginUserId1 == viewUserId1;

//console.log(isSame);


//if-elae statements:-

//if statements:-

if (isSame1){
    console.log("edit profile 2")
}

if( isSame == true){
    console.log("edit profile 1") // it is throws false values bcoz  isSame  having data is  not same, if your are using == also it give false becuase condition dont fullfill

} //false



if( isSame != true){
    console.log("edit profile 3") // it is throws true values bcoz  isSame  having data is  not same, if your are using != also it give true becuase condition  fullfill

  } //edit profile ==>answer

if( isSame == false){
    console.log("edit profile 4") // it is throws true bcoz after giving data as it false i know then it gives console.lo() value as output values bcoz  isSame  having data is  not same, if your are using == also it give true becuase condition  fullfill

} //edit profile  ==>answer



////////////////////////////////////////////


//if-elae statements:-

if(true){
    console.log("hai")
}

let a =25;
 let b =35;
 let c = 35;

 let d= a+b;



 if(a === b){
    console.log("firt one is correct")
 } else if(b === d){
    console.log("second  is correct")
 } else  if(b  === c){
   console.log( "toal  pratice")
 }else{
    console.log("total error")
 }



let logging = 100;
let viewid = 120;

if(logging === viewid ){
    console.log("edit profile");
    console.log("view Archive");
    console.log("All Tools")
}else {
    console.log("Follow");
    console.log("Message");
}


//  while(a === b ){
//     console.log("a is greater than b")
//  }
if (b === d){
    console.log("b is greater than a")
 }else if(c === d){
    console.log("c is greater than d")
 }else {
    console.log(" ok fine")
 }


 //////////////////////////////////


 let orderAmount = 200;
 let minimumAmount = 299;

let totalOrder = orderAmount + 99;

//greater than

 if (orderAmount > minimumAmount){
    console.log("Cupon code : HUNGRY100")
 }else if( totalOrder > minimumAmount){
    console.log("COPY ABOVE:4999")
 }else if(totalOrder >= minimumAmount){
    console.log("Cupon applied : 100")

 }else {
   console.log("ok nothing you got")
 }


 // lessthan <

 if (orderAmount > minimumAmount){
    console.log("Cupon code : HUNGRY100")
 }else if( totalOrder < minimumAmount){
    console.log("COPY ABOVE:499")
 }else if(totalOrder <= minimumAmount){
    console.log("Cupon applied : 100")

 }else {
   console.log("ok nothing you got")
 }

/////////////////////////////////////////////////

// using && (and ) operator

// let dbEmail = "madankumargowd@gmail.com"
// let dbPassword = "123456789";

// let database = dbEmail + dbPassword;

// let userEmail = "madankumargowd@gmail.com";
// let userPassword = "123456789";

// let userDetails = userEmail+userPassword;
 
// console.log(dbEmail === userEmail);
// console.log(dbPassword === userPassword);

// console.log(database === userDetails)

// console.log(dbEmail === userEmail && dbPassword === userPassword ) // it use for two or more conditions which are getting true value we use && condtions to join all // LHS ==== RHS then we use && to join to two or more conditions
//                                                                    // suppose if any condution is false then use &&  automatically it throws error


//////////////////////////////////////////////////////////////



// let dbEmail = "madankumargowd@gmail.com"
// let dbPassword = "123456789";

// let userEmail = "madankumargowd@gmail.com";
// let userPassword = "123456789";

// if(dbEmail === userEmail && dbPassword === userPassword){
//     console.log("login success")
// }else{
//    console.log("login failure")
// }


// let dbEmail1 = "madankumargowd@gmail.com"
// let dbPassword1 = "12345678";

// let userEmail1 = "madankumargowd@gmail.com";
// let userPassword1 = "123456789";

// if(dbEmail1 === userEmail1 && dbPassword1 === userPassword1){
//      console.log("login success")
// }else{
//     console.log("login failure")
// } // kit throws error because  bot conditions are not equal so it false


//////////////////////////////////////////////////////////////////////////////////


// using || (or)  operator


// in this if a === b but c != d in this use or(||) operetator then i gives true value  (a === b || c === d)


let dbEmail = "madankumargowd@gmail.com"
let dbPassword = "12345678";

let userEmail = "madankumargowd@gmail.com";
let userPassword = "123456789";

if(dbEmail === userEmail || dbPassword === userPassword){
    console.log("login success")
}else{
   console.log("login failure")
}


let dbEmail1 = "madankumargowd@gmail.com"
let dbPassword1 = "12345678";

let userEmail1 = "madankumargowd@gmail.com";
let userPassword1 = "1234567";

if(dbEmail1 === userEmail1 || dbPassword1 === userPassword1){
     console.log("login success")
}else{
    console.log("login failure")
} 
