interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

interface classDirectorInterface {
  new (): DirectorInterface;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home'
  }

  getCoffeeBreak() {
    return 'Getting a coffee break'
  }

  workDirectorTasks() {
    return 'Getting to director tasks'
  }
}

interface classTeacherInterface {
  new (): TeacherInterface;
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: (number | string)) {
  return (typeof salary === 'number' && salary < 500) ? new Teacher : new Director;
}


console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


function isDirector(employee: any) {
  
}

function executeWork(employee: (Director | Teacher)) {
  (employee instanceof Director) ? console.log(employee.workDirectorTasks()) : console.log(employee.workTeacherTasks())
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));


type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}