var i
var y
var x
var hundredth = 0
var minutes = 00
var seconds = 0.0
var tenthCounter = 0.0
function doThat(){
  tenthCounter++
  if(tenthCounter === 10){
    tenthCounter = 0
    seconds++
    var i = Math.round(Math.random() * 255)
    console.log(i)
    var x = Math.round(Math.random() * 255)
    console.log(x)
    var y = Math.round(Math.random() * 255)
    document.getElementById('secondArea').style.color = 'rgb(' + i + ', ' + x + ', ' + y + ')'
    document.getElementById('minuteArea').style.color = 'rgb(' + i + ', ' + x + ', ' + y + ')'
    document.getElementById('tenthSecond').style.color = 'rgb(' + i + ', ' + x + ', ' + y + ')'


  }
  if(seconds < 10){
    document.getElementById('secondArea').value = '0' + seconds + '.'
  }
  else{
    document.getElementById('secondArea').value = seconds + '.'
  }
  if(seconds === 60){
    minutes++
    seconds = 0

  }
  if(minutes < 10){
    document.getElementById('minuteArea').value = '0' + minutes + ':'
  }
  else{
    document.getElementById('minuteArea').value = minutes + ':'
  }
  document.body.style.backgroundColor = document.getElementById('tenthSecond').style.color
  document.getElementById('button').style.backgroundColor = document.getElementById('tenthSecond').style.color
  document.getElementById('tenthSecond').value = tenthCounter
  // document.getElementById('tenthSecond').style.backgroundColor = 'rgb(' + seconds + ',60,150,.5)'
  // document.getElementById('secondArea').style.backgroundColor = 'rgb(' + seconds + ',60,150,.5)'
  // document.getElementById('tenthSecond').style.color = 'rgb(' + parseInt(i) + minutes + ',' + parseInt(i) + minutes / 2 + ',' + parseInt(i) + minutes + ')'
  // document.getElementById('secondArea').style.color = 'rgb(' + parseInt(i) + minutes + ',' + parseInt(i) + minutes / 2 + ',' + parseInt(i) + minutes + ')'
  // document.getElementById('minuteArea').style.color = 'rgb(' + parseInt(i) + minutes + ',' + parseInt(i) + minutes / 2 + ',' + parseInt(i) + minutes + ')'

  console.log(seconds)
}
var timer


function startTenths(){
  timer = setInterval(doThat, 100.00)
}
var clockExpire
document.getElementById('button').addEventListener('click', function(){
  clearInterval(timer)
  if(this.innerHTML === 'Pause'){
      this.innerHTML = 'Continue'
      clockExpire = setInterval(resetClock, 15000)
    }
  else if(this.innerHTML === 'Start!'){
    startTenths()
    this.innerHTML = 'Pause'
    clearInterval(clockExpire)
    }
  else if(this.innerHTML === 'Continue'){
    startTenths()
    this.innerHTML = 'Pause'
    clearInterval(clockExpire)
  }
  else{
    this.innerHTML = 'Continue'
    clearInterval(clockExpire)
  }
})
var dblReset
document.getElementById('button').addEventListener('dblclick', function(){
  if(this.innerHTML === 'Pause'){
    clearInterval(timer)
    document.getElementById('tenthSecond').value = 0
    document.getElementById('secondArea').value = '0' + 0 + '.'
    document.getElementById('minuteArea').value = '0' + 0 + ':'
    seconds = 0
    tenthCounter = 0
    minutes = 0
    document.getElementById('button').innerHTML = 'Start!'
  }
})
function resetClock(){
  clearInterval(timer)
  document.getElementById('tenthSecond').value = 0
  document.getElementById('secondArea').value = '0' + 0 + '.'
  document.getElementById('minuteArea').value = '0' + 0 + ':'
  seconds = 0
  tenthCounter = 0
  minutes = 0
  document.getElementById('button').innerHTML = 'Start!'

}
