function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(`count 값: ${count}`);
    return count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

// A와 B는 서로 다른 실행 컨텍스트(클로저 환경)을 가지고 있음
counterA(); // count 값: 1
counterA(); // count 값: 2
counterB(); // count 값: 1  (A와 완전히 독립된 스코프)
counterB(); // count 값: 2
