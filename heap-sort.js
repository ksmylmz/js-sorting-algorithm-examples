


////// selection sorting 
let list = [390,341,93,546,293,918,731,278,241,97,982,293,953,888,556,110,55,249,168,39,933,686,820,801,42,503,570,897,69,461,914,759,400,882,547,637,123,409,953,507,288,781,648,847,334,843,831,217,928,624,21,817,60,534,2,780,869,881,176,720,139,363,883,438,741,681,187,689,491,403,615,118,385,222,231,721,453,696,529,21,216,445,183,967,23,647,682,529,970,276,932,266,624,257,707,224,928,8,688];
key = 0;
j = 0;
stepCount=0;
function sort( arr)
    {
        var n = arr.length;
 
        // Build heap (rearrange array)
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
            heapify(arr, n, i);
 
        // One by one extract an element from heap
        for (var i = n - 1; i > 0; i--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
 
            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }
 
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, n, i)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;
 
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;
 
        // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
 
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
		stepCount++;
    }
 
    /* A utility function to print array of size n */
    function printArray(arr)
    {
        var n = arr.length;
        for (var i = 0; i < n; ++i)
            document.write(arr[i] + " ");
         
    }
 
 
    var arr = list; //[ 5, 12, 11, 13, 4, 6, 7 ];
    var n = arr.length;
 
    sort(arr);
 
    document.write( "Sorted array is <br>");
    printArray(arr, n);


// console.log("sorted selection list",list);
console.log("step",stepCount);

//664