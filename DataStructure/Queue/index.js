class Queue{
  constructor(){
    this.dataStore = []
  }
  addqueue(target){
    this.dataStore.push(target)
  }
  delqueue(){
    if(this.dataStore.length === 0){
      return 'Empty'
    }
    return this.dataStore.shift()
  }
  getIndex(){
    if(this.dataStore.length === 0){
      return 'Empty'
    }
    return this.dataStore[0]
  }
  getEnd(){
    if(this.dataStore.length === 0){
      return 'Empty'
    }
    return this.dataStore[this.dataStore.length - 1]
  }
  toString(){
    return this.dataStore.join(',')
  }
  clear(){
    delete this.dataStore
    this.dataStore = []
  }
  isEmpty(){
    return this.dataStore.length === 0
  }
}

const queue = new Queue()

queue.addqueue('apple')
queue.addqueue('banale')
queue.addqueue('component')
console.log(queue.isEmpty())
console.log(queue.toString())
console.log(queue.getIndex())
console.log(queue.getEnd())
while(!queue.isEmpty()){
  console.log(queue.delqueue())
}
console.log(queue.isEmpty())