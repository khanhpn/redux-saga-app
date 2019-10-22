// hello => redux => end
function* printName() {
  yield 'redux-saga';
}

function* hello() {
  yield 'hello';
  yield* printName();
  yield 'end';
}

const iterator = hello();
console.log(iterator.next());
console.log(iterator.next());
