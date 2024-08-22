const express = require('express');
const fs = require('fs');
const { argv } = require('process');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  try {
    let re = 'This is the list of our students\n';
    fs.readFile(argv[2], { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end(`${re} Cannot load the database`);
        return;
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
      re += `Number of students: ${content.length}\n`;
      Object.keys(obj).forEach((key) => {
        re += `Number of students in ${key}: ${obj[key].count}. List: ${obj[key].name.join(', ')}\n`;
      });
      re = re.slice(0, re.length - 1);
      res.end(re);
    });
  } catch (err) {
    res.statusCode = 500;
    res.end('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;
