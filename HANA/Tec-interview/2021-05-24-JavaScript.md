[JavaScript] 아토믹 디자인 패턴

화학용어를 빌려 말하자면 UI 컴포넌트 또한 가장 작은 단위로 쪼개고 합치며 UI를 마치 레고블럭 쌓듯이 만들어나가는 방법입니다.

아토믹 디자인은 원자(Atoms) > 분자(Molecules) > 유기체(Organisms) > 템플릿(Templates) > 페이지(Pages)로 단위를 정합니다.

원자인 Atoms는 가장 작은 단위의 컴포넌트를 말합니다.
HTML의 태그같이 기능적으로 가장 작은 단위의 컴포넌트인 Label, Input, CheckBox, Select를 원자라고 볼 수 있습니다.
분자인 Molecules는 atom을 여러개 조합한 컴포넌트입니다.
유기체는 분자와 원자들을 조합하여 컴포넌트를 만듭니다.
템플릿은 단순하게 스타일링에 집중한 단위로 컴포넌트를 주입만 하면 바로 사용할 수 있도록 레이아웃을 그립니다.
페이지는 해당 템플릿에 알맞은 컴포넌트를 주입하게 되면, 템플릿에서 만들어 놓은 레이아웃에 맞게 사용할 수 있도록 합니다. 전체적인 로직이나 상태등을 Page레벨에서 컨트롤해야합니다.

참조:
https://tech.madup.com/atomic-design/
https://medium.com/@inthewalter/atomic-design-for-react-514660f93ba
https://ui.toast.com/weekly-pick/ko_20200213
