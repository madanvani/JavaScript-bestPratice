 //for loop  (for 10 time or 20 times revovle):-

 let titles = ["iphone","oneplus","samsung"];

 let noOfTitles=titles.length;

 //for lops working as
 //let i = 0; it means that in arrays firts element is assiging with zero;
 // i < noOfTitles is used for checking the the length of all titles;
 // i++ is ues for adding 1(one ) number to i=0; i=1; i=2 etc; for checking the length of noOfTitles as length and fullfill the requremnts

 //0 < 3 --> true --> titles[0];
 //1 < 3 --> true --> titles[1];
 //2 < 3 --> true --> titles[2];
 //3 < 3 --> false there is no  3rd elemts so it gives false

 for(let i=0; i < noOfTitles; i++){
    

     //checking all i values as titles values from  0 to bel w 2 until it reaches 3 after 3 strikes it stops loop and giuve results weather it is true or false as correct data
       console.log(titles[i]); //titles[0];
     //  console.log(titles[i]); titles[1];
     //  console.log(titles[i]); titles[2];

      
 }

 //for loop for numbers

 let prices = [200,250,300,400,450];

 //index[]=[0,1,2,3,4]

 let noOfItems = prices.length;

 console.log(noOfItems);

//items 5 --> 0,1,2,3,4
//0 < 5 --> true --> prices;
//1 < 5 --> true --> prices;
//2 < 5 --> true --> prices;
//3 < 5 --> true --> prices;
//4 < 5 --> true --> prices;
//5 < 5 --> false --> rouces; becuase it is not less than to 5


 //i < noOfItems are called as conditions , i++ are called as increment
 for(i=0; i < noOfItems; i++  ){

   //checking all i values as prices values from  0 to below 2 until it reaches 3,4 after 35strikes it stops loop and giuve results weather it is true or false as correct data
   
    console.log(prices[i]); //prices[0];
   //  console.log(prices[i]); prices[1];
   //  console.log(prices[i]); prices[2];
   //  console.log(prices[i]); prices[3];
   //  console.log(prices[i]); prices[4];


   
 }



 let productTitles = ["Iphone 13 ","Iphone 14","Iphone 15 Pro"];
 
 let pricess= [25000,45000,75000];

 let reviews =[1000,2000,300]

//json objects

 let product11 = {
    title :"Iphone 13",price:25000,reviews:10000 // key:value
 };

 console.log(product11.title);
 console.log(product11.price);
 console.log(product11.reviews);

 

 let video1 ={
    title:"Bro vs  sis",channelName:"funmoji",views:"3.1M",postOn:"1 year ago"
 }



 console.log("title " + video1.title);
 console.log("channel "+video1.channelName);
 console.log("views "+ video1.views);
 console.log("posts "+ video1.postOn);



//json arrays:-

 let product1 = {
    title :"Iphone 13",price:25000,reviews:10000 // key:value
 };

 let product2 = {
    title :"Iphone 14",price:45000,reviews:2000 // key:value
 };

 let product3 = {
    title :"Iphone 15 Pro",price:75000,reviews:300 // key:value
 };


 let titless =["Iphone 13 ","Iphone 14","Iphone 15 Pro"]

 let products=[
    {title:"Iphone 13",price:25000,reviews:10000}, //element //object all in curely brackets calkled as object
    {title:"Iphone 14",price:45000,reviews:2000},
    {title:"Iphone 15 Pro",price:75000,reviews:300},
]

let numberOfProducts= products.length

console.log(numberOfProducts);
console.log(products[2])


console.log(products[0].title)
console.log(products[1].price);
console.log(products[2].reviews);




let videos=[
    {title:"All in one",channelName:"film moji",views:"2.9 m"},
    {title:"waitrd for 15 yearse",channelName:"web dev simplified",views:"1.9 m"},
    {title:"bestcinema",channelName:"alertcimemas",views:"90k "}
]

console.log(videos[0].title)
console.log(videos[0].channelName)
console.log(videos[3].views)