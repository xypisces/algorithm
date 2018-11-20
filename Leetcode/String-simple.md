### 反转字符串

编写一个函数，其作用是将输入的字符串反转过来。

```
输入: "hello"
输出: "olleh"
输入: "A man, a plan, a canal: Panama"
输出: "amanaP :lanac a ,nalp a ,nam A"
```

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let arr = []
    let newString = ''
    for(let i of s) {
      arr.push(i)
    }
    for(let i=arr.length-1; i>=0; i--){
      newString+=arr[i]
    }
    return newString
};
```

###  字符串中的第一个唯一字符

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

您可以假定该字符串只包含小写字母。

```
s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
```

```js
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = []
    let arr1 = []
    for(let i of s) {
      arr.push(i)
    }
    let l = arr.length;
    for(let i=0; i<l; i++){
      let key = arr.shift()
      if(arr.indexOf(key) === -1 && arr1.indexOf(key) === -1){
        return i;
      }
      arr1.push(key)
    }
    return -1;
};
```

### 字符串转换整数 (atoi)

请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

说明：

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

```
输入: "42"
输出: 42

输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。因此无法执行有效的转换。

输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。因此返回 INT_MIN (−231) 。
```

```js
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let MAX = Math.pow(2,31)
    let MIN = -Math.pow(2,31)
    let num = 0
    let sign = 1 //是否是正数
    let n = str.length //字符串长度
    let i = 0 //下标指针
    if( n === 0 ) return 0
    while( i<n && str.charAt(i) == ' ') i++
    if(str.charAt(i) == '+') {
      i++
    }else if (str.charAt(i) == '-') {
      i++
      sign = -1
    }
    for(; i<n; i++){
      if(str.charAt(i) < '0' || str.charAt(i) > '9') break;
      if(num > Math.floor(MAX/10) || (num == Math.floor(MAX/10) && Number(str.charAt(i)) >= MAX % 10)) {
        return sign == -1 ? MIN : MAX - 1
      }
      num = num * 10 + Number(str.charAt(i))
    }
    return num * sign
};
```

### 实现strStr()

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
当 needle 是空字符串时我们应当返回 0 。

```
输入: haystack = "hello", needle = "ll"
输出: 2

输入: haystack = "aaaaa", needle = "bba"
输出: -1
```
```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0
    for(let i=0; i<haystack.length; i++){
      let j = i
      let k = 0
      while(j<haystack.length && k<needle.length && haystack.charAt(j) === needle.charAt(k)){
        j++
        k++
      }
      if(k === needle.length) return i
    }
    return -1
};
```