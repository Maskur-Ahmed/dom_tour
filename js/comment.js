// step:1 get the button;
document.getElementById('postBtn').addEventListener('click',()=>{
    // get the comment inside the textarea;
    let commentBox = document.getElementById('commentArea');
    let commentValue = commentBox.value;
    let commentContainer = document.getElementById('commentContainer');
    // create a p tag using create element;
    let p = document.createElement('p');
    // add the p tag using append child on the comment container;
    commentContainer.appendChild(p);
    // push the comment into the main area;
    p.innerText= commentValue;
    // clear the text area;
    commentBox.value = '';
});

function del(){
    // select the comment area;
 document.querySelectorAll('.coment');
 //select the delete button;
 let delBtn = document.getElementById('del');
 delBtn.style='display:none'

}