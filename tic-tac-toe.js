window.addEventListener('load', () => {
  const squares = document.querySelectorAll('#board div');

  for (let x = 0; x < squares.length; x++) {
    squares[x].classList.add('square');
    console.log(squares);
    // Now Add an event listener when a square is clicked
   // squares[x].addEventListener('click', () => {
      // write code to add X or O to the square clicked
  }
  
});