# Notable-Skill-Assessment

See live site here:

https://bc-notable-skill-assessment.herokuapp.com/

On live site or localhosted, you can get JSON data served if desired.

`/doctors`
- GET request
- This will give you a JSON response back with an array containing each doctor as an object.
- example: http://localhost:3000/Doctors or https://bc-notable-skill-assessment.herokuapp.com/Doctors

`/appointments/:doctor/:date`
- GET request
- This will give you a JSON response back with an array containing each appointment (as an object) for the specified doctor at the specified date.
- example: http://localhost:3000/appointments/Krieger,%20Algernop/2022-10-16 or https://bc-notable-skill-assessment.herokuapp.com/appointments/Krieger,%20Algernop/2022-10-16



### Requests made through interaction of created front-end (index.ejs) or other interface (I used Postman to test).

`/`
- GET request, home page, serves up index.ejs contains list of all doctors (as buttons on ejs), and appointments for all doctors for today's date (thought this was a nice touch).

`/getAppointments/:doctorId/:date`
- GET request, renders index.ejs again but with only specified doctor's / date's appointments.

`/newAppointment`
with body = 
{
"firstName": "string",
"lastName": "string",
"date": "yyyy-mm-dd",
"time": "24:00",
"kind": "string",
"doctor": "string",
"doctorId": "string"
}

- POST request, viewed as form inputs with submit button, on submission => "refreshes" page currently on with applicable information, adds appointment to DB
- requests will throw an error if not a 15min increment, or doctorId already has 3 appointments.
- time is in 24hr format (AM / PM for live site, auto converted on submission, I love HTML sometimes, especially the step attribute here)
- example: http://localhost:3000/newAppointment or https://bc-notable-skill-assessment.herokuapp.com/newAppointment with body {"firstName":"test","lastName":"1","date":"2022-10-16","time":"08:00","kind":"New Patient","doctor":"Hibbert, Julius","doctorId":"634c14224326e9435800ad99"}

`/deleteAppointment/:_id?_method=DELETE`
- Send as POST request, uses method-override to convert POST request to DELETE, viewed as buttons with each appointment, on click => "refreshes" page currently on with applicable information, deletes applicable appointment from DB

 or 

`/deleteAppointment/:_id`
- Send as DELETE request, responds with index.ejs, deletes applicable appointment from DB
- example: http://localhost:3000/deleteAppointment/634c14cf9664efd9528424d9 or https://bc-notable-skill-assessment.herokuapp.com/deleteAppointment/634c14cf9664efd9528424d9


Doctor and Appointment ID's are auto generated by MongoDB

## How to Setup Your Own Version:

### Install

`npm install`

---

### Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 3000 (can be any port example shown is 3000)
  - DB_STRING = `mongodb+srv://<username>:<password>@cluster0.o3vmh.mongodb.net/<database>?retryWrites=true&w=majority` (your database URI for MongoDB, example shown. Must add username, password, and database name )

---

### Run

`npm start`


(note: using the live site at the same time as initiating HTTP requests from other sources could possibly induce bugs)

## Using Live Site:

### Viewing appts

After accessing live site at: https://bc-notable-skill-assessment.herokuapp.com/

Select a date at top of Doctors section. (if not, defaults to today's date)

Clicking a doctor will then load that doctor's appointments for that date.

### Adding appts

Under Appointments section, choose/enter items in form field. Then click Add Appointment.

Must be on 15 min interval time or error message is displayed.

If too many appts are scheduled (3 max), does not allow submission. Error message displayed.

### Deleting appts

Click button of applicable appt to delete.