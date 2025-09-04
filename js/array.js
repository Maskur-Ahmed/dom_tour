// let myArr =['apple','banana','plum'];


// myArr[1]='maskur';
// myArr[3]='ahmed';
// // alert(myArr[1]);
// console.log(myArr);
// console.log(myArr.length);

// // alert(myArr.at(-1));

// let place =['Thakurgaon','Rajshahi','sylhet'];

// place.push('kataban');
// place.shift()
// place.unshift('maskur');
// alert(place);
// =======================Dom start=================;

let decrement = document.getElementById('decrement');
let increment = document.querySelector('#increment');
let quantity = document.getElementById('quantity');

let mvalue = 0;
quantity.innerHTML=mvalue;

increment.addEventListener('click',()=>{
    mvalue++;
    quantity.innerHTML=mvalue;
});

decrement.addEventListener('click',()=>{
  if(mvalue == 0 ){
    alert('tmake ekta nitei hobe');
  }
  else{
    mvalue--;
    quantity.innerHTML=mvalue;
  }
});

//*======================input part start=================;
let inpt = document.getElementById('inpt');
let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    
})