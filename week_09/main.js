
// dom content loaded event listener
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('gradeBtn').addEventListener('click', calcGrade)
})

function calcGrade(event){
event.preventDefault()
var result = document.getElementById('gradeResult')

let homework = document.getElementById('homework').value
let attendance = document.getElementById('attendance').value
let quiz = document.getElementById('quiz').value
let midterm = document.getElementById('midterm').value
let final = document.getElementById('final').value


let avHw
let avAttend 
let avQuiz 
let avMid
let avFin

avHw = homework * 0.05
avAttend = attendance * 0.10
avQuiz = quiz * 0.20
avMid = midterm * 0.30
avFin = final * 0.35

total = avHw + avAttend + avQuiz + avMid + avFin

let p1 = document.createElement('P')
let p2 = document.createElement('P')
let p3 = document.createElement('P')
let p4 = document.createElement('P')

var t1 = document.createTextNode('Your final grade will be ' + total + '%')

p1.appendChild(t1)
result.appendChild(p1)
}
