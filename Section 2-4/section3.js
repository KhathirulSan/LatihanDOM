//Parent Node
const title = document.querySelector('.title');
console.log(title.parentNode);
//Child Node
const parent = document.getElementById('parent');
let firstchild = parent.firstchild;
console.log(firstchild);
//Get Child Sibling
let nextchild = title.nextElementSibling;
console.log(nextchild);