var reverse = function(x) {
  let MAX = Math.pow(2,31)
  let MIN = -Math.pow(2,31)
  let num = 0
  let sign = 1
  let k = 0
  let str = x + ''
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

console.log(reverse(1534236469))

var isAnagram = function(s, t) {
  let i = 0
  let k = 0
  let newT = t
  if(s.length !== t.length) return false
  for(let j=0; j<s.length; j++){
    i++
    if(newT.indexOf(s.charAt(j)) !== -1) {
      k++
      console.log(s.charAt(j))
      newT = newT.replace(s.charAt(j),'')
      console.log(t)
    }
  }
  if(i === k){
    return true
  }
  return false
};

console.log(isAnagram('aacc','ccac'))

var isPalindrome = function(s) {
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

console.log(isPalindrome("A man, a plan, a canal: Panama_"))

var countAndSay = function(n) {
  var _str = '1';
 for(var i=1;i<n;i++){
  console.log(_str.match(/1+|2+|3+|4+|5+|6+|7+|8+|9+/g))
     _str = _str.match(/1+|2+|3+|4+|5+|6+|7+|8+|9+/g).map(v=>''+v.length+v[0]).join('');
 }
 return _str
};

console.log(countAndSay(6)) 
// 111221
console.log('------------')
var romanToInt = function(s) {
  let count = 0;
  let i = 0
  console.log(s.length)
  while(i<s.length){
    console.log('s',s.charAt(i))
    console.log('i',i)
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
    console.log(count)
  }
  return count
};

console.log(romanToInt('MCMXCIV'))