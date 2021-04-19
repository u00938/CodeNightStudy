<!--
파일 이름은 날짜-문제제목 (예시: 2021-03-21-완주하지못한선수.md)
-->

[Binary Search Tree] Implementation Binary Search Tree

- insert(value): 입력받은 value를 Binary Search에 맞게 Tree에 계층적으로 추가할 수 있어야 합니다.
- contains(value): 트리에 포함된 데이터를 찾을 수 있어야 합니다.
- preorder(callback): 전위 순회를 통해 트리의 모든 요소에 callback을 적용할 수 있어야 합니다.
- inorder(callback): 중위 순회를 통해 트리의 모든 요소에 callback을 적용할 수 있어야 합니다.
- postorder(callback): 후위 순회를 통해 트리의 모든 요소에 callback을 적용할 수 있어야 합니다.

**code**

```js
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value)
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
				this.right.insert(value)
      }
    } else {
      return;
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (value < this.value) {
			return this.left && Boolean(this.left.contains(value))

    }
    if (value > this.value) {
			return this.right && Boolean(this.right.contains(value))
    }
  }

	// 이진 탐색 트리를 전위 순회하는 메서드를 만듭니다.
  preorder(callback) {
		callback(this.value);
    if (this.left) {
      this.left.preorder(callback)
    };
    if (this.right) {
      this.right.preorder(callback)
    };
  }

	// 이진 탐색 트리를 중위 순회하는 메서드를 만듭니다.
  inorder(callback) {
    if (this.left) {
      this.left.inorder(callback)
    };
    callback(this.value);
    if (this.right) {
      this.right.inorder(callback)
    };
  }

	// 이진 탐색 트리를 후위 순회하는 메서드를 만듭니다.
  postorder(callback) {
    if (this.left) {
      this.left.postorder(callback)
    };
    if (this.right) {
      this.right.postorder(callback)
    };
    callback(this.value);    
  }

}
```

**description**

ㅠㅅㅠ