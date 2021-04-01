### 모든레코드 조회하기

```sql
SELECT * from ANIMAL_INS order by ANIMAL_ID;
```

### 역순 정렬하기

```sql
SELECT NAME, DATETIME from ANIMAL_INS order by ANIMAL_ID desc;
```

### 아픈동물 찾기

```sql
SELECT ANIMAL_ID, NAME from ANIMAL_INS where INTAKE_CONDITION='Sick';
```

아푸지마 ..

### 어린 동물 찾기

```sql
SELECT ANIMAL_ID, NAME from ANIMAL_INS where NOT INTAKE_CONDITION='aged';
```

### 동물의 아이디와 이름

```sql
SELECT ANIMAL_ID, NAME from ANIMAL_INS;
```

### 여러 기준으로 정렬하기

```sql
select ANIMAL_ID, NAME, DATETIME from ANIMAL_INS order by NAME, DATETIME desc;
```

### 상위 n개 레코드

```sql
SELECT NAME from ANIMAL_INS order by DATETIME limit 1;
```
