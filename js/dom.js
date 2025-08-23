// let h1 = document.getElementById('first');
// h1.innerHTML = "khawa dawa";
// // h1.classList.remove("someclass");
// console.log(h1)
// console.log(h1.classList);
// let cls = document.getElementsByClassName("someclass");
// console.log(cls);

// let fru = document.querySelector('#fruit');
// fru.innerHTML = "maskur's fruit"
// console.log(fru.innerHTML);

// let fc = document.getElementsByClassName("f_collection");
// console.log(fc);

// let plc = document.querySelectorAll('.place');
// console.log(plc);

// // h1.setAttribute('class','democlass');

// localStorage.setItem('username','Alex');
// let rem = localStorage.getItem('username');
// console.log(rem);
// localStorage.removeItem('username');

// let sections = document.querySelectorAll('section');

// for(const sec of sections){
//     sec.style.backgroundColor="green"
//     sec.style.border = '2px solid blue'
// }
//========================================================================;
let main = document.getElementById("main");
let h1 = document.getElementById('first');
h1.innerHTML = 'vober bati'
let section = document.createElement('section');
section.innerHTML=`
<h1>what i learned</h1>
<ul>
   <li>html</li>
   <li>css</li>
   <li>javascript</li>
   <li>tailwind</li>
</ul>
`;

main.appendChild(section);

let fList = document.getElementById("first_list");

let li = document.createElement("li");
li.innerText = "lokochoko";

fList.appendChild(li);

let sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.backgroundColor="purple";
    section.style.padding='5px';
    section.style.marginBottom='10px';
    section.style.color='white';
    section.style.borderRadius='20px';
}

let tList = document.querySelector("#third_list");
console.log(tList)

let li2 = document.createElement("li");

li2.innerText='reactjs';

tList.appendChild(li2);
