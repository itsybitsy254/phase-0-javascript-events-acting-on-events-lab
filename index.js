// Your code here
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });

  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left.replace('px', ''), 10);
    if (left < 360 - 40) { 
      dodger.style.left = `${left + 1}px`;
    }
  }
  function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left.replace('px', ''), 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  
  