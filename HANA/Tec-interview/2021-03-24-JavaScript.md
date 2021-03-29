[JavaScript] closure에 대해 설명해 주시고 example이 있다면 이야기해 주세요.

클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합입니다.
앞서말한 함수는 반환된 내부함수를 의미하고, 그 함수가 선언됐을때의 렉시컬 환경이란 내부함수가 선언되었을때의 스코프를 의미합니다.
간단히 말하면 클로저는 자신이 생성될 때의 환경인 렉시컬 스코프를 기억하는 함수라고 말할 수 있습니다.
3가지 이유로 클로저를 사용합니다.
첫번째는 현재의 상태를 기억하고, 변경된 최신 상태를 유지하기 위함이고,
두번째로는 전역 변수의 사용을 억제하기 위함이고
마지막으로는 정보를 은닉하기 위함입니다.

예시로는 클로저 모듈 패턴을 사용한 방법으로,
변수를 스코프 안쪽에 가두어 함수 밖으로 노출시키지 않는 방법입니다.

```js
function makeCounter() {
  let privateCounter = 0;

  return {
    increment: function () {
      privateCounter++;
    },
    decrement: function () {
      privateCount--;
    },
    getValue: function () {
      return privateCounter;
    },
  };
}

let counter1 = makeCounter();
counter1.increment();
counter1.increment();
counter1.getValue(); // 2

let counter2 = makeCounter();
counter2.increment();
counter2.decrement();
counter2.increment();
counter2.getValue(); // 1
```

두 카운터에 각각 다른 privateCounter를 다루면서, privateCounter를 밖으로 노출시키지 않습니다.
이 의미는 재사용이 가능해진다는 점입니다.
