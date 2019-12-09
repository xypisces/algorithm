class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  addNode(v) {
    this.root = this._addChild(this.root, v);
  }
  _addChild(node, v) {
    if (!node) {
      this.size++;
      return new Node(v);
    }
    if (node.value > v) {
      node.left = this._addChild(node.left, v);
    } else if (node.value < v) {
      node.right = this._addChild(node.right, v);
    }
    return node;
  }
  //中序遍历
  midTraversal() {
    this._mid(this.root);
  }
  _mid(node) {
    if (node) {
      this._mid(node.left);
      console.log(node.value);
      this._mid(node.right);
    }
  }
  preTraversal() {
    this._pre(this.root)
  }
  _pre(node) {
    if (node) {
      console.log(node.value)
      this._pre(node.left)
      this._pre(node.right)
    }
  }
  backTraversal() {
    this._back(this.root)
  }
  _back(node) {
    if (node) {
      this._back(node.left)
      this._back(node.right)
      console.log(node.value)
    }
  }
}

const bst = new BST();
bst.addNode(8);
bst.addNode(6);
bst.addNode(12);
bst.addNode(7);
bst.addNode(5);
bst.addNode(11);

bst.midTraversal();
console.log('----')
bst.preTraversal();
console.log('----')
bst.backTraversal();
