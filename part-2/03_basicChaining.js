const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
  return getDataFromFilePromise(user1Path).then((user1) => {
    return getDataFromFilePromise(user2Path).then((user2) => {
      return [JSON.parse(user1), JSON.parse(user2)];
      });
    });
  };

// TODO: 여러개의 Promise를 then으로 연결하여 작성합니다


// readAllUsersChaining().then((result) => {
//   console.log('All Users:', result);
// });

module.exports = {
  readAllUsersChaining
}