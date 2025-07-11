const fs = require('fs');

// 3
// rename(..., callback(error, data)
// try { renameSync(...) } catch(e) {}
// promises.rename().then().catch(0)

try {
    fs.renameSync('./file.txt', './file-new.txt');
}  catch (err) {
    console.error(err);
}


fs.rename('./file-new.txt', './file.txt', err => {
    console.error(err);
})

fs.promises.
    rename('./file.txt', './file.txt')
    .then(() => console.log('Done!'))
    .catch(console.error);

console.log('hello')