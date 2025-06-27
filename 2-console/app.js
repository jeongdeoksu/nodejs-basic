console.log("logging...");

console.clear();

// log level
console.log("log");   // 개발
console.info("info");   // 정보
console.warn("warn");   // 정보
console.error("error");   //에러, 사용자 에러, 시스템 에러

// assert
// 참이 아닌 경우에만 출력되고 참인 경우에는 출력되지 않음
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!')

// print object
const student = {name: 'ellie', age: 20};
console.log(student);
console.table(student);
console.dir(student);
const student2 = {name: 'ellie', age: 20, company: {name: 'AC'}};
console.dir(student2, { showHidden: true , colors: false, depth: 2 });

// measuring time
console.time('for loop');
for (let i = 0; i < 1000000; i++) {
  i++
}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a fuction')
}
a();
a();
a();
console.countReset('a fuction');
a();

// trace
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log('f3')
  console.trace();
}

f1()