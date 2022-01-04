export default class BubbleSort {
  arr = []
  newArr = []

  constructor(arr){
    this.arr = [...arr]
  }

  sorting(){
    this.newArr = [...this.arr]
    let swap = true;
    do {
      swap = false
      for (let i = 0; i < this.newArr.length - 1; i++) {
        if (this.newArr[i] > this.newArr[i + 1]){
          let tmp = this.newArr[i]
          this.newArr[i] = this.newArr[i + 1]
          this.newArr[i + 1] = tmp
          swap = true
        }
      }
    } while (swap);
    return this.newArr
  }

  getArrayBeforeSort(){
    return this.arr;
  }

  getArrayAfterSort(){
    return this.newArr;
  }

}