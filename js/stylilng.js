let pS = document.getElementById('placesSection');

console.log(pS.parentNode.childNodes[1].nextSibling);
let li = document.createElement('li');

li.innerText='hi am i looking good';

pS.appendChild(li);
