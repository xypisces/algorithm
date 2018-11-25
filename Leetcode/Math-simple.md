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

### 计数质数

统计所有小于非负整数 n 的质数的数量。

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

分析：

- 质数只能被1和他本身整除
- 例子：如16= 1*16，2*8，4*4，8*2，16*1，如25= 1*25，5*5，25*1
- 由上面例子可以知道，i*j=n的过程中，存在一个开平方k，只需判断k之前是否有其他整除树即可，从而减少循环的次数
- 首先排除除2之外的偶数，然后遍历k之前树，如果有整除则跳过，没有则count加一

```js
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0
    for(let i = 2; i<n; i++){
      if(i == 2) count++;
      if(i % 2 == 0) continue
      let isPrime = true
      for(let j=3; j<=Math.sqrt(i); j+=2) {
        if(i % j === 0) {
          isPrime = false;
          break
        }
      }
      if(isPrime) {
        count++
      }
    }
    return count
};
```

### Fizz Buzz

写一个程序，输出从 1 到 n 数字的字符串表示。

1. 如果 n 是3的倍数，输出“Fizz”；

2. 如果 n 是5的倍数，输出“Buzz”；

3. 如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = []
    for(let i=1; i<=n; i++){
      if(i%3===0 && i%5 === 0){
        arr.push('FizzBuzz')
      }else if(i % 3 === 0) {
        arr.push('Fizz')
      }else if(i % 5 === 0) {
        arr.push('Buzz')
      }else{
        arr.push(i+'')
      }
    }
    return arr
};
```

### 罗马数字转整数

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

```
输入: "III"
输出: 3
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  //暴力解法1
  let count = 0;
  let i = 0
  while(i<s.length){
    switch(s.charAt(i)){
      case 'M':
        count+=1000
        i++;
        break;
      case 'D':
        count+=500
        i++;
        break;
      case 'C':
        if(i<s.length && s.charAt(i+1) === 'D'){
          count+=400
          i+=2
        }else if(i<s.length && s.charAt(i+1) === 'M'){
          count+=900
          i+=2
        }else{
          count+=100
          i+=1
        }
        break;
      case 'L':
        count+=50;
        i++;
        break;
      case 'X':
        if(i<s.length && s.charAt(i+1)  === 'L'){
          count+=40
          i+=2
        }else if(i<s.length && s.charAt(i+1)  === 'C'){
          count+=90
          i+=2
        }else{
          count+=10
          i+=1
        }
        break;
      case 'V':
        count+=5;
        i++;
        break;
      case 'I':
        if(i<s.length && s.charAt(i+1)  === 'V'){
          count+=4
          i+=2
        }else if(i<s.length && s.charAt(i+1)  === 'X'){
          count+=9
          i+=2
        }else{
          count+=1
          i+=1
        }
        break;
      default:
        break;
    }
  }
  return count
  //数组索引法
  let roman = ['I','V','X','L','C','D','M','IV','IX','XL','XC','CD','CM']
  let num = [1,5,10,50,100,500,1000,4,9,40,90,400,900]
  let count = 0
  let i = 0
  while(i<s.length){
    let index = roman.indexOf(s.charAt(i))
    let index2 = roman.indexOf(s.charAt(i)+s.charAt(i+1))
    if(index2 !== -1) {
      count += num[index2]
      i+=2
    }else{
      count += num[index]
      i+=1
    }
  }
  return count
};
```