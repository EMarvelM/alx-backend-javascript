const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve) => {
    try {
      fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
          throw new Error('Cannot load the database');
        }
        const content = data.split('\n').slice(1).filter((d) => d.trim().length > 0);
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
        console.log(`Number of students: ${content.length}`);
        Object.keys(obj).forEach((key) => {
          console.log(`Number of students in ${key}: ${obj[key].count}. List: ${obj[key].name.join(', ')}`);
        });
        resolve();
      });
    } catch (err) {
      throw new Error('Cannot load the database');
    }
  });
}

module.exports = countStudents;
