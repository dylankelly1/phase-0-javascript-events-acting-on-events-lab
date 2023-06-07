/* Left
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


  // Right
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      const rightNumbers = dodger.style.right.replace("px", "");
      const right = parseInt(rightNumbers, 10);
  
      dodger.style.right = `${left + 1}px`;
    }
  });
  
  function moveDodgerRight() {
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (right < 180) {
      dodger.style.right = `${right + 1}px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  */

  let dodger;

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

describe('moveDodgerLeft()', () => {
  beforeEach(() => {
    dodger = document.createElement('div');
    dodger.id = 'dodger';
    document.body.appendChild(dodger);
    dodger.style.left = '100px';
  })

  it('moves the DODGER to the left', () => {
    var left = dodger.style.left
    left = parseInt(left)

    moveDodgerLeft()

    var newPosition = dodger.style.left
    newPosition = parseInt(newPosition)

    expect(newPosition).to.be.below(left)
  })
})

describe('moveDodgerRight()', () => {
  beforeEach(() => {
    dodger = document.createElement('div');
    dodger.id = 'dodger';
    document.body.appendChild(dodger);
    dodger.style.left = '100px';
  })

  it('moves the DODGER to the right', () => {
    var left = dodger.style.left
    left = parseInt(left)

    moveDodgerRight()

    var newPosition = dodger.style.left
    newPosition = parseInt(newPosition)

    expect(newPosition).to.be.above(left)
  })
})