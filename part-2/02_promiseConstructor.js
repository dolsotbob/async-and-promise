const fs = require("fs");

const getDataFromFilePromise = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

// return new Promise()
// TODO: Promise 및 fs.readFile을 이용해 작성합니다.


// getDataFromFilePromise('README.md').then(data => console.log(data));


module.exports = {
  getDataFromFilePromise
};


