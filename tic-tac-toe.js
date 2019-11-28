window.addEventListener('load', () => {
  const squares = document.querySelectorAll('#board div');
  let playerX = true;
  
  for (let y = 0; y < squares.length; y++) {
    squares[y].classList.add('square');
    console.log(squares);
   
   squares[y].addEventListener('click', () => {

  // Adding X or O alternately to a square when clicked
    if (playerX == true) {
      squares[y].innerHTML = 'X';
      squares[y].classList.add('X');
      
    } else {
      squares[y].innerHTML = 'O';
      squares[y].classList.add('O');
    }
     playerX = !playerX; 
   });
   
   
   
  squares[y].onmouseover = () => {
    squares[y].classList.add('hover');
  };
   
  squares[y].onmouseleave = () => {
    squares[y].classList.remove('hover');
  }; 
   
   
  // squares[y].addEventListener('mouseover', () => {
    
  //   if (event.type == 'mouseover') {
  //     squares[y].target.add('hover')
  //   }else{
      
      
  //   }
    
  // });
  
  
  }

});