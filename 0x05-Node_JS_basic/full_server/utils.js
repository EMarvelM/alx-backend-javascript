import fs from 'fs';

export async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
      if (err) {
        return reject(new Error("Failed to read file: " + err.message));
      }
      try {
        const content = data.split('\n').slice(1).filter((d) => d.length > 0);
        const obj = {};
        for (let i of content) {
          const line = i.split(',');
          const fields = line[line.length -1];
          const firstName = i.split(',')[0];

          if (fields in obj) {
            obj[fields].push(firstName);
          } else {
            obj[fields] = [firstName];
          }
        }
        return resolve(obj);
      } catch (err) {
        return reject(err);
      }
    });
  });
};
