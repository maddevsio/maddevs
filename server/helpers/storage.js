/* eslint-disable */
const fs = require('fs');

const write = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data), 'utf8', err => {
      if (err) reject(err);
      resolve(true);
    });
  });

const read = (path, key = null) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      if (key) {
        resolve(JSON.parse(data)[key]);
      }
      resolve(JSON.parse(data));
    });
  });

module.exports = {
  write,
  read,
};
