interface Teacher { 
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// console.log(teacher3);
console.log(director1);


interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return firstName.charAt(0).concat('. ').concat(lastName);
}

console.log(printTeacher("John", "Doe"));


interface createStudentConstructor {
  new (firstName: string, lastName: string): createStudentClass
}

// class
interface createStudentClass {
  _firstName: string;
  _lastName: string;
  displayName(): string;
}

class StudentClass implements createStudentClass{
  _firstName: string;
  _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  static workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  } 
}

// Assign the class to a variable with the type of the constructor interface
const StudentClassConstructor: createStudentConstructor = StudentClass;

const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(StudentClass.workOnHomework()); // Output: Currently working