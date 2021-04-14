[Javascript Question]

### 2. (function() {

### console.log(1);

### setTimeout(function(){console.log(2)}, 1000);

### setTimeout(function(){console.log(3)}, 0);

### console.log(4);

### })(); 실행하면 결과가 어떻게 나오나요? 왜 그런가요?

~~Answer.~~
결과는 1,4,3,2 순으로 나옵니다. 일단 console.log인 1과 4가 먼저 찍히고, 그다음 2개의 settimeout 중에서 0초가 적혀있는 settimeout에있는 3이 찍히고, 그다음 1초후에 실행되는 settimeout에 있는 2가 찍힙니다. settimeout에 0초가 적혀있어도 console.log와 같이 바로 찍히지 않는 이유는 settimeout이 실행되면 settimeout에 있던 console.log(3)이 백그라운드에 들어가고, 0초후, 테스크큐에 들어가게됩니다. 이때 이벤트루프가 호출스택이 비워질때까지 기다리다가, 테스크큐에 들어가있는 console.log(3)을 호출스택에 넣어줍니다. 그러면 console.log(3)가 실행되고 비워지게 됩니다. 이런과정을 거치기 때문에 console.log(1),(4)가 호출스택에 들어가고, console(3)은 백그라운드를 거쳐 테스크 큐에 들어가있다가 호출스택에 있는 콘솔이 실행되고 비워지고 나서나, 이벤트루프를 통해 호출스택으로 들어가 실행됩니다. 따라서 실행결과는 1,4,3,2 로 나오게 됩니다.
