let wheel = document.querySelector('.wheel')
let spinButton = document.querySelector('.spinButton')
let value = Math.floor(Math.random() * 3600)

spinButton.onclick = function () {
  wheel.style.transform = `rotate(${value}deg)`
  value+=value
}