const path = require('path');

let p = path.basename('./text.txt', '.json');
console.log(p);

console.log(process.env.PATH);

console.log(process.env.PATH.split(path.delimiter));

console.log(path.delimiter);

console.log(path.dirname(path.join(__dirname, './text.txt')));

console.log(path.extname('./text.txt'));

console.log(path.format({
  root: '/',
  base: 'text.txt'
}))

console.log(path.format({
  root: '/',
  name: 'text',
  ext: '.txt'
}))

console.log(path.format({
  dir: __dirname,
  base: 'text.txt',
}))

console.log(path.isAbsolute('/server'))