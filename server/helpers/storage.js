const fs = require('fs');

const write = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data), 'utf8', err => {
      if (err) reject(err);
      resolve(true);
    });
  });
};

const read = (path, key = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      if (key) {
        resolve(JSON.parse(data)[key]);
      }
      resolve(JSON.parse(data));
    });
  });
};

module.exports = {
  write,
  read
};
