let date = new Date()
let selectedDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()

const dateInput = document.querySelector('#appointmentDate')
const doctorList = [...document.querySelectorAll('.doctorsForm')]

dateInput.addEventListener('change', setDate)

function setDate(){
    selectedDate = dateInput.value
    console.log(selectedDate)

    updateDoctorsAction()
}

function updateDoctorsAction(){
    doctorList.forEach(doctor => doctor.action = doctor.action.slice(0, -22) + selectedDate + "?_method=GET")
}

updateDoctorsAction()