const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')


const newYear = '1 Jan 2024'
const formatTime = (time) => time < 10 ? `0${time}` : time

function countdown() {
  const newYearsDate = new Date(newYear)
  const currentDate = new Date()
  
  const totalSeconds = (newYearsDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60



  daysElement.innerHTML = days
  hoursElement.innerHTML = formatTime(hours)
  minutesElement.innerHTML = formatTime(minutes)
  secondsElement.innerHTML = formatTime(seconds)
}

countdown()

setInterval(countdown, 1000)