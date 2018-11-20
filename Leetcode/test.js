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