# 프로그래머스 소수 찾기

[문제링크](https://programmers.co.kr/learn/courses/30/lessons/42839)

## Code

```js
function solution(numbers) {
	// 순열을 구하기위해 js에 내장된 set을 쓸거에요!
	// Set자료구조는 중복된수는 안들어가요!
	const permutation = new Set();
	const getPermutation = (array, select) => {
		// array는 현재 손에있는 종이쪼가리?입니다
		// select는 종이쪼가리로 만든 숫자에요 !
		if (select) permutation.add(+select);
		// 만약 손에있는 종이쪼가리가 없으면 함수를 멈춰야겠죠?
		if (!array.length) return;
		// 손에 있는 종이쪼가리를 순회해요
		for (let i = 0; i < array.length; i++) {
			// 다음에 사용할 종이쪼가리를 손에서 빼서
			const next = array.slice();
			next.splice(i, 1);
			// 만든 숫자에다 추가시켜줘야겠죠?! (재귀)
			getPermutation(next, select + array[i]);
		}
	};
	getPermutation([...numbers], "");
	// 이제 이렇게 만든 순열로 소수가 몇갠지 구할거에요!
	// set으로 만든 객체는 values라는 메소드가있어요!
	// 내가 넣은 값들을 모조리 꺼내서 객체로 만들어 줍니다
	const permutations = permutation.values();
	console.log(permutations);
	// 만든 순열을 순회시켜줄거에요
	// 순회하면서 이게 소수인지 아닌지 카운트해줍시다!
	// 그러기 위해서 for문 스코프 바깥에다가 결과를 선언해야겠죠?
	let result = 0;
	for (let num of permutations) {
		console.log(num);
		//0이면 스킵해줘요
		if (!num) continue;
		// 1이하일 경우엔 소수가 아닙니다 그러니 스킵!
		if (num <= 1) continue;
		// 2와 3일 경우엔 소수에요
		// 결과카운트를 하나 올려주고 스킵할거에요
		if (num === 2 || num === 3) {
			result++;
			continue;
		}
		// 2로 나눴을 때 나머지가 0 이면 소수가 아니겠죠?
		if (num % 2 === 0) continue;
		/* 소수를 수할땐 구하려는 수의 - 1 만큼 굳이 안나눠봐도 
    제곱근 만큼의 수까지만 나눠줘도 소수인지 아닌지 판단할 수 있어요*/
		const sqrt = Math.sqrt(num);
		//2까지 나눴으니까 3부터 시작해서 숫자를 올리면서 나눠봅시다.
		//for문을 나왔을 때 이 수가 소수인지 아닌지 판단하기위해
		//boolean하나 선언해줍시다.
		//초기값은 true로요!
		let isPrime = true;
		for (let i = 3; i <= sqrt; i++) {
			//나눠떨어지면 isPrime을 false로 바꿔주고 반복문도 스킵해줍시다!
			if (num % i === 0) {
				isPrime = false;
				break;
			}
		}
		//최종관문을 거쳐 소수라면 결과 카운트를 하나 올려줍니다!
		if (isPrime) result++;
	}
	return result;
}
```

## description

주석에 설명을 달았지만 이 문제의 관건은 두가지에요!

1. 가지고있는 수를 가지고 중복되지않는 순열을 구하는것!
2. 그 구한 순열들을 가지고 소수인지 아닌지 판별하는것!

입니다!  
혹여 보실가봐 주석을 최대한 세세하게 달아봤어요 !
