let pS = document.getElementById('placesSection');

console.log(pS.parentNode.childNodes[1].nextSibling);
let li = document.createElement('li');

li.innerText='hi am i looking good';

pS.appendChild(li);
let main = document.getElementById('main');
let sec = document.createElement('section');
let h1 = document.createElement('h1');
h1.innerText ='foods i like';
let p = document.createElement('p');
p.innerText = 'the foods are very good';
sec.appendChild(h1);
sec.appendChild(p);
main.appendChild(sec);
