[Javascript Question]

### 1. ES6에 대해서 알고 계신가요? 사용하고 있는 ES6 feature들을 설명해 주세요

~~Answer.~~
ecma script 6번째 버전으로, let, const, 화살표함수, template literal 등등 새로운 문법이 추가가 되었습니다.
let과 const는 아무데서나 hoisting이 가능했던 var의 문제점을 보완하고자 추가된 문법으로 const를 쓰는것을 권유하는 추세입니다.
화살표함수는 function 키워드 대신 화살표(=>)를 사용해 선언할 수 있습니다.
let pow = function (x) { return x _ x; };
대신
const pow = x => x _ x; 와 같이 functioin키워드나 return을 사용하지 않아도 됩니다.
template literal은 그 전에는 ""를 하나하나씌워서 사용해야했다면, ``백틱안에서 문장이나 띄어쓰기, 단어 상관없이 입력하면 그대로 출력이 가능합니다.
