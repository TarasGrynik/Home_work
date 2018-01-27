const max = +process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let min = 1;
    return {
      next() {
        if (min > max) {
          return {done: true};
        }
        let value = min;
        if (value % 15 === 0) {
          value = 'FizzBuzz';
        } else if (value % 3 === 0) {
          value = 'Fizz';
        } else if (value % 5 === 0) {
          value = 'Buzz';
        }
        min++;
        return {done: false, value: value};

      }
    }
  }
};

for (let n of FizzBuzz) {
  console.log(n);
}
