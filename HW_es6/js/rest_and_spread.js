let rawArgs = process.argv.slice(2);
let args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

let avg = (...args) => {
  let newArr = args.reduce((pre, next) => {
    return pre + next;
  });
  return newArr / args.length;
};

console.log(avg(...args));