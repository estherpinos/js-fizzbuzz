
const boxes = document.querySelector('.boxes');
console.log(boxes)
for(let i = 1; i<=100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  boxes.appendChild(box);
}