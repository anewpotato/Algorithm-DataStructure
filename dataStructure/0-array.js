/**
 * 1. 순서가 있는 컬렉션으로 인덱스를 통해 접근 가능.
 * 2. 동적 크기 조절.
 * 3. 다양한 데이터 타입 지원.
 */

// 배열의 선언 방법.
const array = [];
const array2 = [1, 2, 3];
const array3 = new Array(5); // 5개의 빈 요소를 가진 배열.
const array4 = new Array(1, 2, 3, 4); // 4개의 요소로 초기화.

// string -> array
const string = "hello";
const array5 = Array.from(string); // ['h', 'e', 'l', 'l', 'o']

// array callback.
const array6 = Array.from([1, 2, 3, 4], (x) => x * 2); // 각 요소 *2

// fill
const array7 = new Array(5).fill(0);

// 배열의 추가 제거.
// 맨 뒤.
array.push(5);
array.pop();

// 맨 앞.
array.unshift(4);
array.shift();

array2.splice(2, 0, 5); // 2번 인덱스에서 0개를 제거하고 5를 추가.
const sliceArray = array2.slice(1, 2); // 1번 인덱스에서 2번 인덱스 전까지 요소를 복사 후 배열 생성.

// 다차원 배열

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 2차원 배열 순회
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]); // 각 요소를 출력
  }
}

// 2차원 배열의 모든 요소에 대해 처리 가능.
let doubledMatrix = matrix.map((row) => row.map((value) => value * 2));
console.log(doubledMatrix); // [[2, 4, 6], [8, 10, 12], [14, 16, 18]]

/**
 * 시간 복잡도
 */

const arrayBigO = [1, 2, 3, 4];

// 1. 액세스
arrayBigO[0]; // O(1)

// 2. 탐색 (특정 값을 찾는 메소드. indexOf, includes, find, filter)
// 배열의 요소를 처음부터 끝까지 비교해야 하므로.
arrayBigO.find((arr) => arr === 3); // O(N)

// 3. 삽입, 삭제
arrayBigO.push(5); // 배열의 끝에 삽입, 삭제 O(1)
arrayBigO.pop();

arrayBigO.unshift(0); // 배열의 중간, 처음에 삽입, 삭제하는 경우, 뒤에 있는 원소를 밀어야 하므로 O(N)
arrayBigO.splice(2, 0, 2.5);
arrayBigO.shift(); // [2, 3, 4]
arrayBigO.splice(1, 1); // [2, 4]

// 4. 정렬
arrayBigO.sort(); // O(N logN)

// 5. map, filter, reduce
// 모든 요소를 순회하므로 O(N)
let mappedArr = arrayBigO.map((x) => x * 2);
let filteredArr = arrayBigO.filter((x) => x > 2);
let reducedValue = arrayBigO.reduce((acc, x) => acc + x, 0);
