


////// selection sorting 
let list = [390,341,93,546,293,918,731,278,241,97,982,293,953,888,556,110,55,249,168,39,933,686,820,801,42,503,570,897,69,461,914,759,400,882,547,637,123,409,953,507,288,781,648,847,334,843,831,217,928,624,21,817,60,534,2,780,869,881,176,720,139,363,883,438,741,681,187,689,491,403,615,118,385,222,231,721,453,696,529,21,216,445,183,967,23,647,682,529,970,276,932,266,624,257,707,224,928,8,688];
key = 0;
j = 0;
stepCount=0;
// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)
{
	var n1 = m - l + 1;
	var n2 = r - m;

	// Create temp arrays
	var L = new Array(n1);
	var R = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray
	var i = 0;

	// Initial index of second subarray
	var j = 0;

	// Initial index of merged subarray
	var k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
        stepCount++;
	}

	// Copy the remaining elements of
	// L[], if there are any
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
        stepCount++;
	}

	// Copy the remaining elements of
	// R[], if there are any
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
        stepCount++;
	}
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){
	if(l>=r){
		return;//returns recursively
	}
	var m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}

// UTILITY FUNCTIONS
// Function to print an array
function printArray( A, size)
{
	for (var i = 0; i < size; i++)
	document.write( A[i] + " ");
}


var arr = list;
var arr_size = arr.length;

	document.write( "Given array is <br>");
	printArray(arr, arr_size);

	mergeSort(arr, 0, arr_size - 1);

	document.write( "<br>Sorted array is <br>");
	printArray(arr, arr_size);

// This code is contributed by SoumikMondal



// console.log("sorted selection list",list);
console.log("step",stepCount);

//664