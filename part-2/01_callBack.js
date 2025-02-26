const fs = require('fs');

const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

// getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile,
};

// 이 안에서 무엇인가 해결되지 않는다. 'getDataFromFile'이 다른곳으로 export 되어서 사용되게끔 만들어줘야함.
