var student1 = {
    firstName: 'marvel',
    lastName: 'egbe',
    age: 25,
    location: 'sandbox',
};
var student2 = {
    firstName: 'unknown',
    lastName: 'hbnb',
    age: 30,
    location: 'cloud',
};
var student3 = {
    firstName: 'unknown',
    lastName: 'hbnb',
    age: 30,
    location: 'cloud',
};
var studentsList = [student1, student2, student3];
var body = document.getElementById('body');
body.innerHTML =
    "<table>\n<thead>\n<tr><td>Name</td><td>Location</td></tr>\n</thead>\n<tbody id=\"tbody\">\n</tbody>\n</table>";
studentsList.map(function (student) {
    document.getElementById('tbody').innerHTML += "<tr><td>".concat(student.firstName, "</td><td>").concat(student.location, "</td></tr>");
});
