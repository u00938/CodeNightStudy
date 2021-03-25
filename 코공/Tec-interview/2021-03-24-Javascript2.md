[Javascript] closure에 대해 설명해 주시고 example이 있다면 이야기해 주세요

```
클로저는 두 개의 함수로 만들어진 환경 으로 이루어진 특별한 객체의 한 종류이며, 외부 함수의 변수에 접근할 수 있는 내부 함수 입니다.

다음은 클로저가 생성되는 조건입니다.
첫째, 내부 함수가 익명 함수로 되어 외부 함수의 반환값으로 사용된다.
둘째, 내부 함수는 외부 함수의 실행 환경(execution environment)에서 실행된다.
셋째, 내부 함수에서 사용되는 변수 x 는 외부 함수의 변수 스코프에 있다.


// 요거는 직접 예시를 작성할 경우 //
function outer() {
var name = closure;
function inner() {
console.log(name);
}
inner();
}
outer();


```
