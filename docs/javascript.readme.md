# 1. JavaScript 기본 문법과 기초 개념

## 1.1 변수 선언과 데이터 타입

### 1.1.1 **변수 선언 방식**

- `var`, `let`, `const`의 차이점과 스코프
  - 스코프(scope)와 호이스팅(hoisting) 개념
  - 함수 스코프 vs. 블록 스코프
- 호이스팅 동작 방식 예시 (`var`와 함수 선언문의 호이스팅)

### 1.1.2 **데이터 타입과 구조**

- 원시 타입(Primitive) vs. 객체(Reference) 타입
  - 문자열, 숫자, 불리언, 심볼, 빅인트, `null`, `undefined`
  - 객체, 배열, 함수 등 참조 타입
- Truthy/Falsy 개념과 타입 변환(implicit, explicit)

  - == vs === (동등 연산자 vs. 일치 연산자)
  - 명시적 형 변환(`String()`, `Number()`, `Boolean()` 등)

### 1.1.3 **동적 타이핑(Dynamic Typing)**

- JS에서의 동적 타이핑 특성
  - 런타임 타입 확인 방법(`typeof`, `instanceof`)
  - 타입 단언/체크 라이브러리(TS와의 차이점)

**연습 아이디어**

- 다양한 변수 선언을 해보고 스코프별 동작을 콘솔에 찍어 확인
- Truthy/Falsy를 확인하는 작은 테스트 함수 작성
- 호이스팅 예시 코드를 작성해 `var`, `let`, `const`가 어떻게 동작하는지 비교

**참고 리소스**

- 추가예정

---

# 2. 함수, 스코프, 클로저

## 2.1 함수 선언과 구조

### 2.1.1 **함수 선언문 vs. 함수 표현식**

- 차이점 및 호이스팅 동작
- IIFE(Immediately Invoked Function Expression)의 활용 사례

### 2.1.2 **Arrow Function(화살표 함수)**

- 기존 함수와의 `this` 바인딩 차이
- 간략한 문법과 사용 장점, 주의점

## 2.2 스코프 체인과 this 바인딩

### 2.2.1 **Lexical Scope(어휘적 스코프)**

- 함수 중첩 시 스코프 체인이 어떻게 연결되는지
- 전역 스코프, 지역 스코프 예시

### 2.2.2 **this 바인딩 규칙**

- 전역 문맥, 함수 호출, 메서드 호출, 생성자 호출, `apply/call/bind` 등
- Arrow function에서의 `this` 동작 방식

## 2.3 클로저(Closure)의 원리와 활용

### 2.3.1 **클로저 발생 구조**

- 함수가 반환된 뒤에도 외부 스코프 변수를 유지하는 메커니즘
- 자주 발생하는 클로저 패턴(예: 모듈 패턴)

### 2.3.2 **메모리 사용과 성능 이슈**

- 클로저 사용 시 메모리 누수 가능성
- 이벤트 핸들러에서의 클로저 주의사항

**연습 아이디어**

- 함수 선언문 vs. 함수 표현식을 각각 써보고, 디버깅 도구로 호이스팅 동작 확인
- 클로저 예시(계산기, 카운터 등)를 직접 구현해 스코프 체인 이해하기
- `this` 바인딩 사례별로 코드 작성하여 콘솔 로그로 바인딩 객체 확인

**참고 리소스**

- 추가예정

---

# 3. 객체 지향과 프로토타입

## 3.1 프로토타입 체인

### 3.1.1 **Prototype 기반 상속**

- `Object.prototype` 체인 구조 이해
- 생성자 함수와 `new` 키워드 동작
- `__proto__` 접근자 vs. `Object.getPrototypeOf()` 사용

### 3.1.2 **프로토타입 메서드 오버라이딩**

- Object.prototype에 메서드를 추가/오버라이드할 때의 영향 범위
- 다수 객체가 공유하는 프로토타입 메서드

## 3.2 클래스(class) 문법

### 3.2.1 **ES6 클래스 기초**

- `constructor` 메서드와 `static` 필드/메서드
- 클래스 상속(`extends`), `super` 키워드
- 실제로는 프로토타입 상속 위에서 동작한다는 점

### 3.2.2 **OOP 원리와 한계**

- 캡슐화, 상속, 다형성 개념을 JS에서 구현하는 법
- 접근 제어자(typescript의 private, protected)와의 비교
- JS의 유연함으로 인한 OOP 설계 시 주의사항

**연습 아이디어**

- 생성자 함수를 이용해 간단한 객체 생성 실습, 프로토타입 메서드 정의
- ES6 클래스로 동일 기능 구현 후 프로토타입 비교
- 상속 관계를 만들어보고 `super` 키워드로 메서드 호출 구조 파악

**참고 리소스**

- 추가예정

---

# 4. 비동기 프로그래밍과 이벤트 루프

## 4.1 이벤트 루프, 태스크 큐, 콜 스택

### 4.1.1 **이벤트 루프 구조**

- 콜 스택(Call Stack) → 태스크 큐(Task Queue) → 마이크로태스크 큐(Microtask Queue)
- 브라우저 렌더링과의 관계, requestAnimationFrame 등

### 4.1.2 **매크로태스크 vs. 마이크로태스크**

- `setTimeout`, `setInterval` 등은 매크로태스크
- `Promise.then()`, `process.nextTick(Node)` 등은 마이크로태스크
- 실행 순서와 성능 고려

## 4.2 콜백, Promise, async/await

### 4.2.1 **콜백 패턴의 문제점**

- 콜백 지옥(Callback Hell)과 가독성 이슈
- 에러 처리가 어렵고 복잡해지는 구조

### 4.2.2 **Promise**

- Promise 객체의 상태(pending, fulfilled, rejected)
- `then`, `catch`, `finally`를 이용한 체이닝
- 에러 전파 방식 이해

### 4.2.3 **async/await**

- 문법 및 Promise 반환 함수와 결합
- 에러 처리를 위한 `try...catch` 패턴
- 동시 처리(`Promise.all`, `Promise.race`) 활용

**연습 아이디어**

- 간단한 비동기 작업 시퀀스를 콜백 → Promise → async/await로 각각 구현
- `setTimeout`과 `Promise.then`을 섞어 어떤 순서로 실행되는지 로깅
- fetch API나 Axios와 함께 async/await 패턴 익히기

**참고 리소스**

- 추가예정

---

# 5. ES6+ 모던 자바스크립트

## 5.1 주요 문법 정리

### 5.1.1 **화살표 함수(Arrow Function)** 복습

### 5.1.2 **템플릿 리터럴(Template Literal)**

- 문자열 결합, 다중 행 문자열, 표현식 삽입 등

### 5.1.3 **구조 분해 할당(Destructuring)**

- 배열, 객체 구조 분해 문법
- 기본값 할당, 나머지 패턴(레스트)

### 5.1.4 **스프레드/레스트 연산자(...)**

- 배열 병합, 객체 병합, 함수 인자 처리

### 5.1.5 **Promise & async/await** (비동기 섹션과 연계)

## 5.2 모듈 시스템 (ES Modules)

### 5.2.1 **import/export 문법**

- 명시적 export와 default export
- 모듈 스코프, 전역 스코프와 구분

### 5.2.2 **Webpack, Rollup, Parcel 등 번들러와의 관계**

- 트리 쉐이킹(Tree Shaking), 코드 스플리팅(Code Splitting) 개념
- Node.js에서 CommonJS(require) vs. ES Modules 차이

## 5.3 ES6 이후 신기능 정리

- ES7~ES13까지 추가된 기능(예: optional chaining `?.`, null 병합 연산자 `??`, BigInt, private class fields 등)

**연습 아이디어**

- 기존 콜백 스타일 코드를 async/await와 구조 분해 할당 등을 이용해 리팩토링
- 작은 유틸 함수 세트를 모듈로 만들어 import/export 연습
- Babel REPL 등을 사용해 변환된 코드 확인하기

**참고 리소스**

- 추가예정

---

# 6. 메모리 모델과 성능 최적화

## 6.1 가비지 컬렉션(GC)과 메모리 관리

### 6.1.1 **GC 동작 방식**

- Mark-and-sweep 알고리즘 개요
- 참조가 끊긴 객체의 수거 과정

### 6.1.2 **변수 생존 범위와 메모리 유의점**

- 함수 종료 후에도 참조하는 경우(클로저)
- 글로벌 객체에 값 할당 시 누수 가능성

## 6.2 메모리 누수와 최적화

### 6.2.1 **이벤트 리스너 누수**

- DOM 요소 제거 시 리스너 해제 필요성
- Vue/React 등 프레임워크에서 자동 해제 vs. 수동 해제

### 6.2.2 **거대한 배열 및 재귀 함수 처리**

- 반복문 vs. 재귀(콜 스택 한계 주의)
- 꼬리 재귀 최적화(TCO) 이슈(자바스크립트 엔진별 지원 상황)

## 6.3 성능 측정 및 디버깅 툴

- Chrome DevTools Performance 탭
- 메모리 스냅샷(Heap Snapshot) 분석
- Lighthouse를 통한 성능 측정 및 개선 가이드

**연습 아이디어**

- 이벤트 리스너 등록/해제를 적절히 하지 않았을 때 발생하는 메모리 문제 찾아보기
- Chrome DevTools Memory 탭에서 힙 스냅샷을 찍고, GC 전후 메모리 사용량 비교
- 대용량 배열/객체를 처리하는 간단 테스트 코드 작성, 성능 측정 후 개선 시나리오 실습

**참고 리소스**

- 추가예정
