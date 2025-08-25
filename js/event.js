////////////////////////////////////////////////
//*option 2:-
function makeBlue(){
    document.body.style.backgroundColor="blue"
}


// *option 3:-

let btn1 = document.getElementById('btn1');

btn1.onclick=function makered(){
    document.body.style.backgroundColor='red';
}

//*option another 3:-

let firstBtn = document.getElementById('first');

firstBtn.onclick =makePurple;

function makePurple(){
    document.body.style.backgroundColor="purple";

}

//=============================================================;

 //*option:2

function makeYollow(){
    document.body.style.backgroundColor="yellow";
}

// ===========================================;

//*option:3
let black = document.getElementById('black');
black.onclick=makeBlack;

function makeBlack(){
    document.body.style.backgroundColor='black';
}
//===========================================================
//* option:4
let btnP = document.getElementById('btnP');
btnP.addEventListener('click',()=>{
    document.body.style.backgroundColor='pink'
})