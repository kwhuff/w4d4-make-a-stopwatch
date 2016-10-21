var name = 'Christy'

function runsLater(){
  alert(name)
}//Stores this data, not run 'right away'.  It runs when the function is called.

var firstTimeout = setTimeout(runsLater, 15000)//Function built into JavaScript.  Second argument is time measurement.  1000 = 1 second.
console.log(firstTimeout)//see queue value in console

var secondTimeout = setTimeout(function(){
  alert('this comes later.')
}, 5000)
console.log(secondTimeout)//see queue value in console

clearTimeout(firstTimeout)//Can cancel a 'setTimeout'.  Accepts only a variable name.
clearTimeout(secondTimeout)

var actionTimer//in this case, it's important that the variable is defined globally for this to work appropriately.
var counter = 0
document.getElementById('action').addEventListener('click', function() {
    counter++
    this.innerHTML = counter

  clearTimeout(actionTimer)
  actionTimer = setTimeout(() => {
    this.innerHTML = '0'
    console.log('happened once.')
    counter = 0}, 2000)
})//When you press the button, it changes to 'Go!' and then back to 'Action' after 2 seconds

var counter = 0
function doThis(){
  counter++
  console.log(counter)
}

var timer
function start(){
  timer = setInterval(doThis, 1000)
}

document.getElementById('action').addEventListener('click', function() {
  clearInterval(timer)

  if (this.innerHTML === 'Paused'){
    start()
    this.innerHTML = 'Paused'
  }
  else{
    this.innerHTML = 'Paused'
  }
})
start()

// var animationId
// function animationLoop(){
//   var button = document.getElementById('action')
//   var top = Number(getComputedStyle(button).top.replace('px',''))
//
//   if (top >= 600){
//     top = 0
//   }
//   button.style.position = 'absolute'
//   button.style.top = top + 35 + 'px'
//   animationId = requestAnimationFrame(animationLoop)
// }
//
// var animationId
// circle.style.height = '50px'
// circle.style.width = '50px'
// function animationCircle(){
//   var circle = document.getElementById('circle')
//   var width = Number(getComputedStyle(circle).width.replace('px',''))
//   var height = Number(getComputedStyle(circle).height.replace('px',''))
//   circle.style.backgroundColor = 'red'
//   circle.style.borderRadius = '400px'
//   circle.style.height = height + 1 + 'px'
//   circle.style.width = width + 1 + 'px'
//   animationId = requestAnimationFrame(animationCircle)
//   if (circle.style.height > 200 && circle.style.height > 200){
//     circle.style.height = height - 1 + 'px'
//     circle.style.width = width - 1 + 'px'
//     animationId = requestAnimationFrame(animationCircle)
//   }
//
// }
// animationCircle()
