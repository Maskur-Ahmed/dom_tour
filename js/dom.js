let lists = document.getElementsByTagName("h1");
console.log(lists);
let place = document.getElementById("place");
console.log(place);
console.log(place.innerText);
let qu = document.querySelector('#fruit');
console.log(qu);
let qAll = document.querySelectorAll(".f_collection")

for( const li of qAll){
    console.log(li.innerText)
}

let first = document.getElementById("first");
console.log(first.classList)