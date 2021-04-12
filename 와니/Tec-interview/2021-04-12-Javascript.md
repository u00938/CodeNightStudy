[Javascript Question]

### 1. closure에 대해 설명해 주시고 example이 있다면 이야기해 주세요

~~Answer.~~
클로저는 함수와 함수가 선언된 어휘적 환경의 조합입니다. 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성됩니다. 쉽게 설명하자면, 함수가 실행되면, 함수 내부에 선언한 변수가 사라지지만, 각 함수마다 존재하는 변수명의 집합인 scope를 계속 들고 있기 때문에 그 함수 내부의 변수를 참조할 수 있게 되는 것입니다.

function makeFunc() {
var name = "olivia";
function displayName() {
alert(name);
}
return displayName;
}
var myFunc = makeFunc();
myFunc();

자바스크립트는 함수를 리턴하고, 리턴한 함수가 클로저를 형성한다. myFunc은 makeFunc이 실행될 때 생성된 displayName 함수의 인스턴스에 대한 참조입니다. displayName의 인스턴스는 변수 name 이 있는 어휘적 환경에 대한 참조를 유지한다. 이런 이유로 myFunc가 호출될 때 변수 name은 사용할 수 있는 상태로 남게 되고 "olivia" 가 alert 에 전달됩니다.
