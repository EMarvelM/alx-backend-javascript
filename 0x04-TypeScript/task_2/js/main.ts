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
  return (typeof salary === 'number' && salary < 500) ? Teacher : Director;
}


console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));