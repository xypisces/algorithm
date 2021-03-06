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
    //利用api
    return s.split('').reverse().join('')
    //暴力解法
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
    //优化
    for(var i = 0 ; i < s.length;i++){
        if(s.indexOf(s[i]) == s.lastIndexOf(s[i])){
           return i
        }
    }
    return -1
    //暴力解法
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
    //优化
    return haystack.indexOf(needle)
    //暴力解法
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

### 整数反转

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

```
输入: 123
输出: 321

输入: -123
输出: -321

输入: 120
输出: 21
```

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let MAX = Math.pow(2,31)
  let MIN = -Math.pow(2,31)
  let num = 0 //反转后的值
  let sign = 1 //正负的标志值
  let k = 0 //是否有负
  let str = x + '' //转换为字符串
  let n = str.length
  if(n === 0) return 0
  if(str.charAt(0) === '-') {
    sign = -1
    k = 1
  }
  for(var i = n-1; i>=k; i--){
    if(num > Math.floor(MAX/10) || (num === Math.floor(MAX/10) && Number(str.charAt(i)) >= Math.floor(MAX%10))) {
      return 0
    }
    num = num * 10 + Number(str.charAt(i))
  }
  return num * sign
};
```

### 有效的字母异位词

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。
你可以假设字符串只包含小写字母。
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
```
输入: s = "anagram", t = "nagaram"
输出: true

输入: s = "rat", t = "car"
输出: false
```

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let i = 0
    let k = 0
    let newT = t
    if(s.length !== t.length) return false
    for(let j=0; j<s.length; j++){
      i++
      if(newT.indexOf(s.charAt(j)) !== -1) {
        k++
        newT = newT.replace(s.charAt(j),'')
      }
    }
    if(i === k){
      return true
    }
    return false
};
```

### 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

```
输入: ["flower","flow","flight"]
输出: "fl"

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = ''
    if(strs.length === 0) return ""
    for(let i=0; i<strs[0].length; i++){
      let s = strs[0].charAt(i)
      let sign = 1
      for(let j=0; j<strs.length; j++){
        if(s !== strs[j].charAt(i)) {
          sign = -1
          break;
        }
      }
      if(sign === -1) break;
      str += s
    }
    return str
};
```

### 验证回文字符串

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

```
输入: "A man, a plan, a canal: Panama"
输出: true
输入: "race a car"
输出: false
```

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 利用api
  const _s = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
  return _s.split('').reverse().join('') == _s
  // 初始的暴力解法思路
  if(s === "") return true
  let arr = []
  let s1 = ''
  let s2 = ''
  let newS = s.toLocaleLowerCase().replace(/\W/g,'')
  for(let i=0; i<newS.length; i++){
    if(newS.charAt(i) !== '_'){
      arr.push(newS.charAt(i))
      s1 += newS.charAt(i)
    }
  }
  for(let j=arr.length-1; 0<=j; j--){
    s2 += arr[j]
  }
  if(s1 === s2){
    return true
  }
  return false
};
```

### 报数

报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

```
1.     1
2.     11
3.     21
4.     1211
5.     111221

输入: 4
输出: "1211"
```

1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

注意：整数顺序将表示为一个字符串。

```js
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
     var _str = '1';
    for(var i=1;i<n;i++){
        _str = _str.match(/1+|2+|3+|4+|5+|6+|7+|8+|9+/g).map(v=>''+v.length+v[0]).join('');
    }
    return _str
};
```