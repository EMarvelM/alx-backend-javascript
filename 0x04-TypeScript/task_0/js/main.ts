interface Student {
  firstName?: string,
  lastName?: string,
  age?: number,
  location?: string,
}

const student1: Student  = {
    firstName: 'marvel',
    lastName: 'egbe',
    age: 25,
    location: 'sandbox',
}

const student2: Student  = {
    firstName: 'unknown',
    lastName: 'hbnb',
    age: 30,
    location: 'cloud',
}


const studentsList: Student[] = [student1, student2];

const body = document.getElementById('body')
body.innerHTML = 
`<table>
<thead>
<tr><td>Name</td><td>Location</td></tr>
</thead>
<tbody id="tbody">
</tbody>
</table>`

studentsList.map((student) => {
  document.getElementById('tbody').innerHTML += `<tr><td>${student.firstName}</td><td>${student.location}</td></tr>`
})