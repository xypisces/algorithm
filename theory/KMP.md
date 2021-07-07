## 字符串匹配算法-KMP

- 构造状态转移图，得到两个变量，1.当前匹配状态，2.遇到的字符

### 暴力匹配

时间复杂度O(MN)

```js
const search = (pat, text) => {
  let M = pat.length;
  let N = text.length;
  for(let i=0; i<=N-M; i++) {
    let j;
    for(j=0; j<M; j++) {
      if(pat[j] !== text[i+j]) {
        break;
      }
    }
    if(j === M) return i;
  }
  return -1;
}
```

### KMP

O(N)

```js
const strStr = (haystack, needle) => {
  if(needle === '') return 0;
  let [i, j] = [0, 0];
  const next = [];
  const nextfuc = (p, next) => {
    next[0] = -1;
    let [j, k] = [0, -1]
    while(j < p.length - 1) {
      if(k === -1 || p[j] === p[k]) {
        if(p[++j] === p[++k]) {
          next[j] = next[k]
        } else {
          next[j] = k
        }
      } else {
        k = next[k]
      }
    }
  }
  nextfuc(needle, next)

  while(i< haystack.length && j< needle.length) {
    if(j === -1 || haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      j = next[j]
    }
  }
  if(j === needle.length) {
    return i-j
  } else {
    return -1
  }
}
```