


////// selection sorting 
let list = [390,341,93,546,293,918,731,278,241,97,982,293,953,888,556,110,55,249,168,39,933,686,820,801,42,503,570,897,69,461,914,759,400,882,547,637,123,409,953,507,288,781,648,847,334,843,831,217,928,624,21,817,60,534,2,780,869,881,176,720,139,363,883,438,741,681,187,689,491,403,615,118,385,222,231,721,453,696,529,21,216,445,183,967,23,647,682,529,970,276,932,266,624,257,707,224,928,8,688];
stepCount=0;
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    stepCount++;
}
 
/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, low, high) {
 
    // pivot
    let pivot = arr[high];
 
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
 
        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {
 
            // Increment index of
            // smaller element
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}
 
/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
function quickSort(arr, low, high) {
    if (low < high) {
 
        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(arr, low, high);
 
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }

}
 
// Function to print an array
function printArray(arr, size) {
    for (let i = 0; i < size; i++)
        document.write(arr[i] + " ");
 
    document.write("<br>");
}
 
// Driver Code
 
let arr = list
let n = arr.length;
 
quickSort(arr, 0, n - 1);
document.write("Sorted array: <br>");
printArray(arr, n);
 
// This code is contributed by Saurabh Jaiswal

// console.log("sorted selection list",list);
console.log("step",stepCount);

//315