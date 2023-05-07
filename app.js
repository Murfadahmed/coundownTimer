var days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"]

var months = [
    "jan",
    "feb",
    "mar",
    "april",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"]

// slecting the elements "text"

let day = document.querySelector('.din')

let hours = document.querySelector('.ganty')

let minutes = document.querySelector('.min')

let second = document.querySelector('.sec')

let text = document.querySelector('.text')

// slecting dots

let day_dot = document.querySelector('.day_dot')

let hr_dot = document.querySelector('.hr_dot')

let mm_dot = document.querySelector('.mm_dot')

let ss_dot = document.querySelector('.ss_dot')

//selecting circles

let dd = document.querySelector('#dd')

let hh = document.querySelector('#hh')

let mm = document.querySelector('#mm')

let ss = document.querySelector('#ss')

let futureDate = new Date("2023-05-22T10:00:00")

console.log(futureDate.getTime())
console.log(days[futureDate.getDay()])
console.log(futureDate.getFullYear())
console.log(futureDate.getDate())
console.log(months[futureDate.getMonth()])
console.log(futureDate.getMinutes())
console.log(futureDate.getSeconds())

text.textContent = `the board exams of 11th class has been held on ${days[futureDate.getDay()]} ${futureDate.getDate()} of ${months[futureDate.getMonth()]} ${futureDate.getFullYear()} at sharp ${futureDate.getHours()}:${futureDate.getMinutes()}:${futureDate.getSeconds()}  `

function Timer() {

    let presentDate = new Date()

    let timeGap = futureDate.getTime() - presentDate.getTime()

    // console.log(timeGap)
    if(timeGap > 0){

    
    
    let daysez = Math.floor(timeGap / 1000 / 60 / 60 / 24)

    // console.log(daysez + "days ")

    
    let Hours = Math.floor(timeGap / 1000 / 60 / 60) - (Math.floor(timeGap / 1000 / 60 / 60 / 24) * 24)
    
    // console.log(Hours + " hours")
    
    let Minute = Math.floor(timeGap / 1000 / 60 - Math.floor(timeGap / 1000 / 60 / 60) * 60)
    
    // console.log(Minute + "minutes")

    let Seconds = Math.floor(timeGap / 1000) - ((Math.floor(timeGap / 1000 / 60) * 60))


    // console.log(Seconds + " seconds")
     
    day.textContent = daysez
    hours.textContent = Hours
    minutes.textContent = Minute
    second.textContent = Seconds


    // animation
    // console.log(Minute)

    dd.style.strokeDashoffset = 440 - (440 * daysez)  /365;

    hh.style.strokeDashoffset = 440 - (440 * Hours)  /24;

    mm.style.strokeDashoffset = 440 - (440 * Minute)  /60;

    ss.style.strokeDashoffset = 440 - (440 * Seconds)  /60;

    // dots animations
    day_dot.style.transform = `rotateZ(${daysez * 0.968}deg)`
    //360deg / 365days = 0.968
    hr_dot.style.transform = `rotateZ(${Hours * 15}deg)`
    //360deg / 24 hours = 15
    mm_dot.style.transform = `rotateZ(${Minute * 6}deg)`
    // 360deg / 60min = 6
    ss_dot.style.transform = `rotateZ(${Seconds * 6}deg)`
    // 360deg / 60sec = 6
    }
    else{
        text.innerHTML = `<h1>Time expired</h1>`
    }

}
// Timer()
setInterval(Timer)