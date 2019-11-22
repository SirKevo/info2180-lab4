window.addEventListener('load', () => {
  const squares = document.querySelectorAll('#board div');
  let playerX = true;
  
  for (let y = 0; y < squares.length; y++) {
    squares[y].classList.add('square');
    console.log(squares);
    // Now Add an event listener when a square is clicked
   // squares[y].addEventListener('click', () => {
      // write code to add X or O to the square clicked
   
   
   squares[y].addEventListener('click', () => {
    console.log(y);
   
    
    
    console.log(squares);
    
    
    
    if (playerX == true) {
      squares[y].innerHTML = 'X';
      squares[y].classList.add('X');
      // playerX = false;
    } else {
      
      squares[y].innerHTML = 'O';
      squares[y].classList.add('O');
      // playerX = true;
    }
     playerX = !playerX; 
    
    // //Use a function to keep track of clicks
    // function clickTrack(){
    //   const clickTracker = [];
    // };
   });
      
  }   
  
  
// let X = document.createTextNode('X');
// let O = document.createTextNode('O');

// square.append(X);
// document.body.append(square.X);

// square.append(O);
// document.body.append(square.O);

  // for (let X = 0; X);
  
});