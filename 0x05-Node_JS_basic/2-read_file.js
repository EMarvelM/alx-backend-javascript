const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    if (fs.accessSync(path) === undefined) {
      const content = fs.readFileSync(path, { encoding: 'utf-8' }).split('\n').slice(1);
  
      const obj = {};
  
      content.forEach((da) => {
        const lastElement = da.split(',').slice(-1)[0];
        const firstElement = da.split(',').slice(0)[0];
  
        if (lastElement.length < 1) {
          return;
        }
        if (lastElement in obj) {
          obj[lastElement].count += 1;
          obj[lastElement].name.push(firstElement);
        } else {
          obj[lastElement] = {
            count: 1,
            name: [firstElement],
          };
        }
      });
      Object.keys(obj).forEach((key) => {
        console.log(`Number of students in ${key}: ${obj[key].count}. List: ${obj[key].name.join(', ')}`);
      });
    }
  } catch {
    throw new Error('Cannot load the database');
  }
};
