console.log("Sword");

let color =document.querySelector('.whole');
let temp;

function getValue(radio) {
    color.classList.remove(temp);
    changeColor();
    
}

function changeColor(){

if(document.getElementById('green').checked) {
    color.classList.add('g');
    temp='g';
    
  }else if(document.getElementById('blue').checked) {
    color.classList.add('b');
    temp='b';
    
  }
  else if(document.getElementById('yellow').checked) {
    color.classList.add('y');
    temp='y';
    
  }
  else if(document.getElementById('purple').checked) {
    color.classList.add('p');
    temp='p';
    
  }
  else if(document.getElementById('red').checked) {
    color.classList.add('r');
    temp='r';
    
  }
  
}
