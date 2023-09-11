
const boxes = document.querySelector('.boxes');
console.log(boxes)
for(let i = 1; i<=100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  boxes.appendChild(box);
  

  if (i % 15 == 0){
    box.append("FizzBuzz");
    console.log("FizzBuzz");
  }
  
  else if (i % 3 == 0){
    box.append("Fizz");
    console.log("Fizz");
  }
   
  else if (i % 5 == 0){
    box.append("Buzz");
    console.log("Buzz");
  }
   
  else {
    box.append(i)
    console.log(i)
  }
    
}
