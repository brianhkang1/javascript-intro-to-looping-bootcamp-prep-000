function forLoop (array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1) {
    array.push("I am 1 strange loop.")
  }
  else {
    array.push(`I am ${i} strange loops.`)
  }
}
return array
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num)
  }
  return 'done'
}

<<<<<<< HEAD
function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());

  return array;
=======

function maybeTrue() {
return Math.random() >= 0.5

function doWhileLoop(array) {
  do {
    array.shift()
  } while (array.length > 0 && maybeTrue())
}
return array
>>>>>>> 07d82f32cdbbfe1449628b0023a7ab736ba9fc38
}