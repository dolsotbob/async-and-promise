const fs = require("fs");

const getDataFromFile = function (filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};
  
  // TODO: fs.readFile을 이용해 작성합니다

/// 다음 코드를 추가해 넣은 후 , js 파일을 실행해보세요.
  

module.exports = {
  getDataFromFile
};
