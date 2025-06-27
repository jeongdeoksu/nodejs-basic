let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
// module.exports.increase = increase;
// module.exports 와 exports는 다르게 동작할 수 있음
// exports에 아래와 같이 다른 Object를 할당하면,다르게 할당한 Object에 increase를 할당 하게됨
// module.exports 와 exports는 전형 다르게 됨
console.log(module.exports === exports);
exports = {};
console.log(module.exports === exports);
exports.increase = increase;
// console.log(module);