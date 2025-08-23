let h1 = document.getElementById('first');
h1.innerHTML = "khawa dawa";
console.log(h1);
let cls = document.getElementsByClassName("someclass");
console.log(cls);

let fru = document.querySelector('#fruit');
fru.innerHTML = "maskur's fruit"
console.log(fru.innerHTML);

let fc = document.getElementsByClassName("f_collection");
console.log(fc);

let plc = document.querySelectorAll('.place');
console.log(plc);

h1.setAttribute('class','democlass');

localStorage.setItem('username','Alex');
let rem = localStorage.getItem('username');
console.log(rem);
localStorage.removeItem('username');