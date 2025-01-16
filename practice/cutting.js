/**
 * 끔찍한 문자열, 배열 자르기.
 */

console.log('array slice -----------');

// slice - 얕은 복사 본을 새로운 배열로 생성.
console.log(array.slice(1, 2));
console.log(array.slice(-2, -1)); // 뒤에서 부터 -1
console.log(array.slice(2));
console.log(array.slice(6)); // 배열 크기 초과 시 새로운 배열.

console.log('array splice -----------');

// splice - 원본 배열을 수정, 새로운 배열 생성.
console.log(array.splice(3, 1, 6, 7, 8)); // 작업 대상이 담긴 배열
console.log(array);

console.log(array.splice(-1, 1, 9, 10)); // 작업 대상이 담긴 배열
console.log(array);

console.log('string substr -----------'); // 시작 인덱스, 길이
const string = 'abcde';

console.log(string.substr(2)); // index 2 ~
console.log(string.substr(2, 1)); // index 2 부터 1개
console.log(string.substr(-5)); // 뒤에서 부터 -1, -5면 -5부터 죽 자르기.
console.log(string.substr(-5, 2));

console.log(string.substr(6)); // 양수 길이 초과는 빈문자열
console.log(string.substr(-6)); // 음수 길이 초과는 0번 인덱스로 간주.

console.log(string.substr(2, -11)); // 0 또는 음수일 경우, 빈문자열.

console.log('string substring -----------'); // 시작 인덱스, 종료 인덱스

console.log(string.substring(2, 1)); // 2>1은 바꿔서 처리 -> 1 ,2
console.log(string.substring(-5, 2)); // 음수는 0으로 처리.
console.log(string.substring(2, 4));

console.log('string slice -----------'); // 배열의 slice와 동일함.

console.log(string.slice(1, 2));
console.log(string.slice(1, -2));
console.log(string.slice(-2, 5));
/**
 * slice: 음수 지원, 시작 인덱스가 종료 인덱스보다 클 경우 빈 문자열
 * splice: 음수는 0으로 처리, 시작 인덱스가 종료 인덱스보다 클 경우 교체하여 처리
 */
