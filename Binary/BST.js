class BTS {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 0;
    this.node = null; //二叉树
  }

  insert(key, value) {
    node = __insert(node, key, value);
  }
  //向以node为根的二叉搜索树中，插入节点（key,value）返回插入新节点后的二叉搜索树的根
  __insert(node = null, key, value) {
    if (node == null) {
      count++;
      return {
        key,
        value
      };
    }
    if (key == node.key) {
      node.value = value;
    } else if (key < node.key) {
      node.left = this.__insert(node.left, key, value);
    } else {
      node.right = this.__insert(node.right, key, value);
    }
    return node;
  }
}
