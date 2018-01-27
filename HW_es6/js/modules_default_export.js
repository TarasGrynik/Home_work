import {PI, square, sgrt} from './modules_with_name';

let arg1 = process.argv[2];
let arg2 = process.argv[3];

console.log(PI);
console.log(sgrt(+arg1));
console.log(square(+arg2));