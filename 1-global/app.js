const fs = require('fs');

console.log(global);

global.hello = () => { console.log('Hello World'); };

global.hello();
hello();