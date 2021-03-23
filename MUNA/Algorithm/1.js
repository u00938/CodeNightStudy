class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    for (const iterator of this.children) {
      if (iterator.contains(value)) {
        return true;
      }
    }

    return false;
  }
}
