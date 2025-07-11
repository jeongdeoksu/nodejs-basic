const fs = require('fs').promises;

// read a file
fs.readFile(
  './file.txt', "utf-8")
  .then(data => console.log(data))
  .catch(console.error);

// writeing a file
fs.writeFile('./file.txt', 'Hello World 🌎') //
 .catch(console.error)

fs.appendFile('./file.txt', "Good Bye ❗️")
  .then(() => {
    fs.copyFile('./file.txt', './file2.txt')
  })
  .catch(console.error);

// copy
fs.copyFile('./file.txt', './file2.txt') //
  .then(() => console.log('Done!'))
  .catch(console.error); // file2.txt에 빈 파일이 생김. 비동기적으로 동작해서 발생한 결과

// folder
fs.mkdir('sub-folder')
  .then(() => {})
  .catch(console.error);

fs.readdir('./') //
  .then(console.log)
  .catch(console.error);