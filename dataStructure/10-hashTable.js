// Map 객체를 사용하여 해시 테이블 구현
const hashTable = new Map();

// 키-값 쌍 추가
hashTable.set('name', 'Alice');
hashTable.set('age', 25);
hashTable.set('job', 'Developer');

// 값 검색
console.log(hashTable.get('name')); // 출력: Alice
console.log(hashTable.get('age')); // 출력: 25

// 키 존재 여부 확인
console.log(hashTable.has('job')); // 출력: true
console.log(hashTable.has('salary')); // 출력: false

// 키-값 쌍 삭제
hashTable.delete('age');
console.log(hashTable.get('age')); // 출력: undefined

// 해시 테이블의 모든 키와 값 출력
for (const [key, value] of hashTable) {
  console.log(`${key}: ${value}`);
}

// 전체 해시 테이블의 크기 확인
console.log(hashTable.size); // 출력: 2

// 해시 테이블 비우기
hashTable.clear();
console.log(hashTable.size); // 출력: 0
