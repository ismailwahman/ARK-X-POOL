
// Calcu ******//
function sum(number) {
    let total = 0;
    for (let i = 0; i < number.length; i++) {
      total += number[i];
    }
    console.log("The sum of the numbers is:", total);
  }
  const number = [1, 2, 3, 4, 5];
  sum(number);

// numbers //
function counteven(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        count++;
      }
    }
    console.log("The count of even numbers is:", count);
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  counteven(numbers);

  //double *****//
  const double = (number) => {
    for (let i = 0; i < number.length; i++) {
      number[i] *= 2;
    }
  };
  const input = [4, 2, 7];
  double(input);
  console.log(input); 

//task 2*******//
const Socks= (socks) => {
    const color = {};
    let pairs = 0;
    for (const sock of socks) {
      color[sock] = (color[sock] || 0) + 1;
      if (color[sock] % 2 === 0) {
        pairs += 1;
      }
    }
    console.log(pairs);
  };
  const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    Socks(socks);



  //****** team work */
        //***** bubblesort */
 function bubble (arr){
  const n= arr.length;
 for (let i=0 ; i< n - 1 ; i ++){
 for (let j = 0; j < n - 1 ; j++){
  if  (arr[j] > arr [j + 1] ){
     [arr[j], arr [ j + 1 ]] = [arr [j + 1 ], arr [j]];
  }
 }
 }
 return arr ;
 }
let arr = [5 , 1 ,8 , 4 , 2, 7, 3];
console.log (bubble(arr) );

    //******** selectionsort */
function selection(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let Index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[Index]) {
        Index = j;
      }
    }
    if (Index !== i) {
      [arr[i], arr[Index]] = [arr[Index], arr[i]];
    }
  }
  return arr;
}
const unsorted = [33, 25, 18, 22, 14];
const sorted = selection(unsorted);
console.log("Sorted Array:", unsorted);




// ***** dalma ///

// Insertion Sort function

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let currentElement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }

  return arr;
}


// Linear search Function:

function linearSearch(arr, target) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }

  return null;
}


// Binary Search Function:

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
}