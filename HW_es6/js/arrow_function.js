let inputs = process.argv.slice(2);
let result = inputs.map((name) => {
  let toUpCase = name.charAt(0).toUpperCase();
  return toUpCase;
})
  .reduce((cur, next) => {
    return cur + next;
  });
console.log(result);