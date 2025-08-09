const fs = require('fs');

const data = [];

// const readStream = fs.createReadStream('./file.txt', {
//   highWaterMark: 8, // default 64 Kbytes
//   encoding: 'utf-8',
//   }
// );
//
// readStream.on('data', chunk => {
//   // console.count(chunk);
//   data.push(chunk);
//   console.log('data');
// })
//
// readStream.on('end', () => {
//   console.log(data.join(''));
// })
//
// readStream.on('error', error=> {
//   console.error(error);
// })

fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // default 64 Kbytes
    encoding: 'utf-8',
  }
).on('data', chunk => {
    // console.count(chunk);
    data.push(chunk);
    // console.log('data');
}).on('end', () => {
  console.log(data.join(''));
}).on('error', error=> {
  console.error(error);
})

