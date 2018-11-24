### 3的幂

给定一个整数，写一个函数来判断它是否是 3 的幂次方。你能不使用循环或者递归来完成本题吗？

```
输入: 9
输出: true
输入: 45
输出: false
```

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let s = n
    while(1){
        if(s === 1){
            return true
        }else if(s < 1) {
            return false
        }
        s = s/3
    }
    //不使用递归
    let s = Math.log10(n)/Math.log10(3)
    return s-Math.floor(s) === 0
};
```