// 선언
const array = [1, 2, 3, 4, 5];

// 주요 기능

const stringArray = Array.from('abcd', (item) => item);
const multiple = Array.from(array, (item) => item * 2);

const multiple2 = array.map((item) => item * 2);

const filter = array.filter((item) => item > 2);

const rec = array.reduce(
  (min, item) => (item < min ? item : min),
  Number.MAX_VALUE
);

const fill = new Array(10).fill('a');

const find = array.find((item) => item > 3);

const method = [];

// 뒤에 추가, 삭제
method.push(1, 2);
console.log(method.pop());
console.log(method);

// 앞에 추가, 삭제
method.unshift(3, 4);

console.log(method.shift());
console.log(method);
