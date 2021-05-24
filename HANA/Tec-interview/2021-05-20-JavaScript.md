[JavaScript] Debounce

이벤트를 그룹화해 특정시간이 지난 후 하나의 이벤트만 발생하도록 하는 기술입니다.
즉 순차적 호출을 하나의 그룹으로 그룹화 할 수 있습니다.
-> 연이어 호출되는 함수들 중 마지막 혹은 제일 처음의 함수만 호출하도록하는 것을 말합니다.

```js
var timer;

document.querySelector('#input').addEventListener('input', function (e) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    console.log('입력 내용: ', e.target.value);
  }, 1000);
});
```

[JavaScript] throttle

이벤트를 일정 주기마다 발생하도록 하는 기술입니다.
-> 마지막 함수가 호출된 후 일정 시간이 자나기 전에 다시 호출되지 않다록 하는 것.

디바운싱과 스로틀링의 차이점은
스로틀링은 주기직인 시간마다 정기적으로 기능실행을 보장하고,
디바운싱은 많은 이벤트가 발생해도 모두 무시하고 특정시간에 어떤 이벤트도 없을때 딱 한번 마지막이벤트를 발생시키는 기법입니다.

```js
var timer;

document.querySelector('#input').addEventListener('input', function (e) {
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      console.log('입력 내용: ', e.target.value);
    }, 1000);
  }
});
```

https://webclub.tistory.com/607
