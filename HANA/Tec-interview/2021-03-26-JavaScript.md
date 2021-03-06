[JavaScript] js에서 this란 무엇이고 어디에 사용되나요

자바스크립트에서 모든 함수는 실행될 때마다 함수 내부에 this라는 객체가 추가됩니다.
함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고,
함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정됩니다.

함수를 실행하는 방식으로는 4가지 방법이 있습니다.

1. 함수를 호출하는 방식은 해당 함수 내부 코드에서 사용된 this는 전역객체에 바인딩 됩니다.
2. 함수가 객체의 프로퍼티 값이면 메소드로 호출됩니다. 메소드 호출 방식은 메소드 내부의 this는 해당 메소드를 소유한 객체, 즉 해당 메소드를 호출한 객체에 바인딩됩니다.
3. 생성자 함수를 통해 객체를 생성할 때는 기존 함수에 new 연산자를 붙여 호출한다. 새롭게 생성된 인스턴스 객체에 바인딩 됩니다.
4. apply/call/bind를 통한 호출 방식은 앞서 말한 상황에 의존하지 않고, this를 자바스크립트 코드로 주입 또는 설정할 수 있습니다.
