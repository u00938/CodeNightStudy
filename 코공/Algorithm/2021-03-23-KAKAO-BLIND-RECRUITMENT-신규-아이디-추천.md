[2021 KAKAO BLIND RECRUITMENT - 유효성검사]

https://programmers.co.kr/learn/courses/30/lessons/72410

문제 설명
카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다.  
"네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때,  
입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.  
다음은 카카오 아이디의 규칙입니다.

아이디의 길이는 3자 이상 15자 이하여야 합니다.
아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(\_), 마침표(.) 문자만 사용할 수 있습니다.  
단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.  
"네오"는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지  
검사하고 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.  
신규 유저가 입력한 아이디가 new_id 라고 한다면,

1단계 new*id의 모든 대문자를 대응되는 소문자로 치환합니다.  
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(*), 마침표(.)를 제외한 모든 문자를 제거합니다.  
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.  
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.  
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.  
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.  
만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.  
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

**code**

```js
function solution(new_id) {
	let answer = new_id.toLowerCase();
	answer = answer.replace(/[^\w-_.]/g, "");

	while (answer.includes("..")) {
		answer = answer.replace("..", ".");
	}

	if (answer[0] === ".") answer = answer.slice(1);
	if (answer[answer.length - 1] === ".") answer = answer.slice(0, -1);

	if (answer.length === 0) {
		answer = "aaa";
	} else if (answer.length === 1 && answer[0] === ".") {
		answer = "aaa";
	} else if (answer.length === 1) {
		answer = answer + answer[0] + answer[0];
	} else if (answer.length === 2) {
		answer = answer + answer[1];
	}

	if (answer.length >= 16) {
		answer = answer.slice(0, 15);
		if (answer[answer.length - 1] === ".") {
			answer = answer.slice(0, -1);
		}
	}

	return answer;
}
```

**description**

//
정규식 표현을 물어보는 문제였다.  
정규식을 아직 제대로 몰라서 정규식 검사는 검색을 해서 적었다.

그 외에 어려웠던 부분은 예외 처리가 은근히 많았던 부분.  
로직은 대부분 맞았지만, 4문제 정도가 통과가 안돼서 봤더니  
if로 예외처리를 못한 부분이 있었다.

조금 더 꼼꼼하게 풀었으면 좋았을 문제.

누구는 모두 정규식으로 깔끔하게 처리했지만  
그건 아직 무리.

문제 푸는 방식은  
위에 써져있는 1~7단계 대로 하나씩 로직을 만들어서 풀었던 것이 끝.
