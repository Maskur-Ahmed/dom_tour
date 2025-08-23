////////////////////////////////////////////////
//*option 2:-
function makeBlue(){
    document.body.style.backgroundColor="green"
}

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click',()=>{
    document.body.style.backgroundColor='red';
});

let firstBtn = document.getElementById('first');
firstBtn.onclick =makePurple;

function makePurple(){
    document.body.style.backgroundColor="purple";

}