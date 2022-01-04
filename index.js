// Sorting
import BubbleSort from "./sorting/bubble/bubbleSort.js";
import SelectionSort from "./sorting/bubble/selectionSort.js";

let arr = [3, 7, 1, 9, 20, 11];

line('Bubble Sort');
let bubble = new BubbleSort(arr);
bubble.sorting();
console.log(`Before Sort : ${bubble.getArrayBeforeSort()}`);
console.log(`After Sort : ${bubble.getArrayAfterSort()}`);

line('Selection Sort');
let selection = new SelectionSort(arr);
selection.sorting();
console.log(`Before Sort : ${selection.getArrayBeforeSort()}`);
console.log(`After Sort : ${selection.getArrayAfterSort()}`);


function line(title) {
  console.log(`==================== ${title} ====================`);
}