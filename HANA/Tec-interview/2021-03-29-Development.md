[Development] Restful api 란? 사용 시 장점과 단점은?

REST란 REpresentational State Transfer의 약자입니다.
REST의 기본 원칙을 성실히 지킨 서비스 디자인은 'RESTful'하다고 표현 할 수 있습니다.
REST는 Resource Oriented Architecture입니다.
그리고 API 설계의 중심에 자원(resource)이 있고, HTTP Method를 통해 자원을 처리하도록 설계하는 것입니다.

<!--
REST의 원칙으로는 Uniform Interface(유니폼 인터페이스), Stateless(무상태성), Caching(캐시 가능), Client-Server, Layered System, Code on demand가 있습니다.
-->

장점으로는 Open API를 제공하기 쉽고, 멀티 플랫폼 지원 및 연동이 용이합니다.
그리고, 원하는 타입으로 데이터를 주고받고, 마지막으로는 기존 웹 인프라인 HTTP를 그대로 사용할 수 있습니다.

단점으로는 사용할 수 있는 주요 메소드가 4가지 정도 밖에 없고, 분산환경에는 부적합하며 HTTP통신 모델에서만 지원을 합니다.
