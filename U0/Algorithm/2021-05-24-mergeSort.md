<!--
파일 이름은 날짜-문제제목 (예시: 2021-03-21-완주하지못한선수.md)
-->

[정렬] 병합 정렬

1. 분할. ppp와 rrr의 중간 qqq를 찾습니다. 이진 검색에서 중간점을 찾았던 것과 같은 방법으로 이 과정을 수행합니다: ppp와 rrr을 더해서 2로 나눈 후 내림을 하여 정수로 만듭니다.
2. 정복. 분할 단계에서 만들어진 두 하위 문제 각각에 있는 하위 배열을 재귀적으로 정렬합니다. 즉 하위 배열 array[p..q]를 재귀적으로 정렬하고 또 하위 배열array[q+1..r]을 재귀적으로 정렬합니다.
3. 결합. 정렬된 두 하위 배열을 하나의 정렬된 하위 배열인 array[p..r]로 결합합니다.

**code**

```js
const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 1) return arr;
  const middleIdx = parseInt(arr.length / 2)
  const arr1 = arr.slice(0, middleIdx)
  const arr2 = arr.slice(middleIdx)
  return merge(mergeSort(arr1), mergeSort(arr2))
};

const merge = (arr1, arr2) => {
  let result = []
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) result.push(arr1.shift())
    else result.push(arr2.shift())
  }
  while (arr1.length) {
    result.push(arr1.shift())
  }
  while (arr2.length) {
    result.push(arr2.shift())
  }
  return result;
}
```

**description**

솔직히 원리는 이해했는데 코드를 이해못했다. 망할 진짜