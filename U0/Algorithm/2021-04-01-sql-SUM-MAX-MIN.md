<!--
파일 이름은 날짜-문제제목 (예시: 2021-03-21-완주하지못한선수.md)
-->

[sql] SUM, MAX, MIN

### 최댓값 구하기

ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. 가장 최근에 들어온 동물은 언제 들어왔는지 조회하는 SQL 문을 작성해주세요.

**code**

```js
SELECT MAX(DATETIME) AS 시간 FROM ANIMAL_INS;
```

<br>

### 최솟값 구하기

ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. 동물 보호소에 가장 먼저 들어온 동물은 언제 들어왔는지 조회하는 SQL 문을 작성해주세요.

**code**

```js
SELECT MIN(DATETIME) AS 시간 FROM ANIMAL_INS;
```

<br>

### 동물 수 구하기

ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. 동물 보호소에 동물이 몇 마리 들어왔는지 조회하는 SQL 문을 작성해주세요.

**code**

```js
SELECT COUNT(*) FROM ANIMAL_INS;
```

<br>

### 중복 제거하기

ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. 동물 보호소에 들어온 동물의 이름은 몇 개인지 조회하는 SQL 문을 작성해주세요. 이때 이름이 NULL인 경우는 집계하지 않으며 중복되는 이름은 하나로 칩니다.

**code**

```js
SELECT COUNT(DISTINCT NAME) FROM ANIMAL_INS WHERE NAME IS NOT NULL;
```