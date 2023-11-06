//Arrays

let productsTitles=[
    "fhjvjsd, djjsad, djbuids ,sgvsf","zfysdsd,sdhggfs,sagygjsfyad"
];


let productsPrices=[12554,25448,24845];

console.table(productsTitles+productsPrices);


// length of arrays:-
let titles=["iphone","google pixel","oneplus"] //inside double qutation we called as elemnts

let noOfTitles = titles.length;

console.log(noOfTitles)

titles = ["iphone","anfriod","blackberry",""];

noOfTitles = titles.length;



console.log(titles.length);


//how to access items using index[] in arrays:-

let titless= ["iphone","oneplus","samsung"];
console.log(titless[0]);
console.log(titless[1]);
console.log(titless[2]);


//updating values in aarys

titless[0]="iphone 13" // with this we can update iphone 13 instead of iphone in arrays
titless[1]="oneplus 9" // with this we can update oneplus 9 instead of oneplus in arrays
titless[2]="samsung A50+" //// with this we can update samsung A50+ instead of samsung in arrays
console.log(titles)




// note:- we can define inside objects also 

let tit =[{
    "madan":123
},
{
    "surname":"parchuri"
},
{ "middle name":"kumar"},
{"firstname":"madan"},
{"role":"developer"}
];

let noOftit= tit.length;



console.log(tit)

console.log(noOftit);

tit[0]={"madan":35};
tit[1]={"firstname":"madan"};
tit[2]={"middle name":"kumar"};
tit[3]={"surname":"paruchuri"};
tit[4]={"role":"angular developer"};

console.log(tit)



