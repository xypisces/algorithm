## 思想

- BFS (广度优先搜索)
  - 把问题抽象成图，从一个点，向四周扩散
  - 数据结构使用队列，将节点加入队列
  - 一般是寻找最短步数，二叉树最小高度等问题
- DFS 就是 回溯算法 (深度优先搜索)


```js
const BFS = (start, target) => {
  const q = [];
  const visited = [];

  q.unshift(start)
  visited.push(start)
  let step = 0;

  while(q.length !== 0) {
    const sz = q.length;

    for(let i=0; i<sz; i++) {
      const cur = q.shift();
      if(cur === target) {
        return step;
      }
  // cur.adj() 泛指 当前节点的相邻节点
      for(x of cur.adj()) {
        if(!visited.includes(x)) {
          q.unshift(x)
          visited.push(x)
        }
      }
    }
    step++;
  }
}

```

### 二叉树的最小高度

```js
const minDepth = (root) => {
  if(root === null) return 0;
  const q = []
  q.shift(root)
  let depth = 1;
  while(q.length > 0) {
    let sz = q.length;
    for(let i=0; i<sz; i++) {
      const cur = q.shift();
      if(cur.left === null && cur.right === null) return depth;
      if(cur.left !== null) q.unshif(cur.left)
      if(cur.right !== null) q.unshif(cur.right)
    }
    depth++;
  }
  return depth;
}
```

### 解开密码锁的最少次数

```js
const plusOne = (s, j) => {
  let str = s.toString();
  if(str[j] === '9') {
    str[j] = '0';
  } else {
    str[j] += 1;
  }
  return new String(str);
}
const minusOne = (s, j) => {
  let str = s.toString();
  if(str[j] === '0') {
    str[j] = '9';
  } else {
    str[j] -= 1;
  }
  return new String(str);
}


const BFS = (deadList, target) => {
  const q = [];
  const visited = []
  let step = 0; // 次数
  q.unshift('0000');
  visited.push('0000');

  while(q.length > 0) {
    let sz = q.length;
    for(let i=0; i<sz; i++) {
      const cur = q.shift();

      // 判断是否到达终点
      if(deadList.includes(cur)) continue;
      if(cur === target) return step;

      for(let j=0; j<4; j++) {
        // 将节点加入队列，去除重复的
        const up = plusOne(cur, j)
        if(!visited.includes(up)) {
          q.shift(up)
          visited.push(up)
        }
        const down = minusOne(cur, j)
         if(!visited.includes(down)) {
          q.shift(down)
          visited.push(down)
        }
      }
    }
    step++;
  }
  return -1;
}
```