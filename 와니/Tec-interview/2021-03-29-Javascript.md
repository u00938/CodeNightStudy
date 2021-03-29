[Javascript Question]

### 1. let 과 var의 차이점과 활용도를 알려주세요

~~Answer.~~
var와 let은 변수 선언시에 사용합니다. var는 var를 선언하기도 전에 사용이 가능하고, 어느곳에서나 접근이 가능한 global scope을 가집니다. var는 어디에 있는 가장 먼저 선언이 불려지는 hoisting 때문에 선언되지도 않은 값들이 할당되어지는 일이 발생할 수 있기 때문에 사용하지 않는 것이 좋습니다. 이런 단점을 보완하기 위해서 ES6문법에 let이 추가가 되었는데요. let은 var처럼 아무데서나 불리지 않는 block scope을 가지고 있어 {} block안에서만 사용되고, 변수에 재할당이 가능합니다.
