class Stack{
  constructor(){
    this.dataStore = [];
    this.top = 0;
  }
  push(target){
    this.dataStore[this.top++] = target
  }
  pop(){
    if(this.top <= 0){
      return 'Empty'
    }
    this.top--
    let data = this.dataStore[this.top]
    this.dataStore.splice(this.top, 1)
    return data
  }
  peek(){
    if(this.top <= 0){
      return 'Empty'
    }
    return this.dataStore[this.top - 1]
  }
  lengths(){
    return this.dataStore.length
  }
  clear(){
    delete this.dataStore
    this.dataStore = []
    this.top = 0
  }
}


const stack = new Stack()
stack.push('apple')
stack.push('bannaer')
stack.push('people')
const l = stack.lengths() + 1
console.log(stack.lengths())
console.log(stack.peek())
console.log('--pop---')
for(let i=0; i<l; i++){
  console.log(stack.pop())
}

// 判断是否为回文字符串
function isPalindrome( word ) {
  const newStack = new Stack()
  for(let i=0; i<word.length; i++){
    newStack.push(word[i])
  }
  let val = ''
  while(newStack.lengths()>0){
    val += newStack.pop()
  }
  if(val === word){
    return 'true'
  }else{
    return 'false'
  }
}
console.log('---isPalindrome---')
console.log(isPalindrome('level'))
console.log(isPalindrome('abcde'))

