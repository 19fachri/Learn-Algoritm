export default class SelectionSort {
  arr = []
  newArr = []

  constructor(arr){
    this.arr = [...arr]
  }

  sorting(){
    this.newArr = [...this.arr]
    for (let i = 0; i < this.arr.length - 1; i++) {
      let minimum = i;
      for (let j = i + 1; j < this.arr.length; j++) {
        if (this.newArr[minimum] > this.newArr[j]) {
          minimum = j
        }
      }
      if (i != minimum) {
        this.newArr[i] = this.newArr[minimum] + this.newArr[i];
        this.newArr[minimum] = this.newArr[i] - this.newArr[minimum]
        this.newArr[i] = this.newArr[i] - this.newArr[minimum]
      }
    }
    return this.newArr
  }

  getArrayBeforeSort(){
    return this.arr;
  }

  getArrayAfterSort(){
    return this.newArr;
  }

}