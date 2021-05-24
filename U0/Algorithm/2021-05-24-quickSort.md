<!--
파일 이름은 날짜-문제제목 (예시: 2021-03-21-완주하지못한선수.md)
-->

[정렬] 퀵 정렬

1. 리스트 가운데서 하나의 원소를 고른다. 이렇게 고른 원소를 피벗이라고 한다.
2. 피벗 앞에는 피벗보다 값이 작은 모든 원소들이 오고, 피벗 뒤에는 피벗보다 값이 큰 모든 원소들이 오도록 피벗을 기준으로 리스트를 둘로 나눈다. 이렇게 리스트를 둘로 나누는 것을 분할이라고 한다. 분할을 마친 뒤에 피벗은 더 이상 움직이지 않는다.
3. 분할된 두 개의 작은 리스트에 대해 재귀(Recursion)적으로 이 과정을 반복한다. 재귀는 리스트의 크기가 0이나 1이 될 때까지 반복된다.

**code**

```js
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  const lSorted = quickSort(left);
  const rSorted = quickSort(right);
  return [...lSorted, pivot, ...rSorted];
}
```

**description**

기준이 될 pivot을 0번째 요소로 선언하고,
배열을 순회하면서 pivot보다 작은 요소는 left 배열에, 큰 요소는 right 배열에 push한다.
재귀의 탈출문으로는 요소가 하나일 경우로 정하고, left와 right로 재귀를 실행한다.
left, pivot, right를 이어붙여 리턴한다.
