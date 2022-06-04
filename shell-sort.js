


////// selection sorting 
let list = [390,341,93,546,293,918,731,278,241,97,982,293,953,888,556,110,55,249,168,39,933,686,820,801,42,503,570,897,69,461,914,759,400,882,547,637,123,409,953,507,288,781,648,847,334,843,831,217,928,624,21,817,60,534,2,780,869,881,176,720,139,363,883,438,741,681,187,689,491,403,615,118,385,222,231,721,453,696,529,21,216,445,183,967,23,647,682,529,970,276,932,266,624,257,707,224,928,8,688];
stepCount=0;
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    stepCount++;
}
 
function printArray(arr)
{
    let n = arr.length;
        for (let i = 0; i < n; ++i)
            document.write(arr[i] + " ");
        document.write("<br>");
}
 
/* function to sort arr using shellSort */
function sort(arr)
{
    let n = arr.length;
  
        // Start with a big gap, then reduce the gap
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
        {
         
            // Do a gapped insertion sort for this gap size.
            // The first gap elements a[0..gap-1] are already
            // in gapped order keep adding one more element
            // until the entire array is gap sorted
            for (let i = gap; i < n; i += 1)
            {
             
                // add a[i] to the elements that have been gap
                // sorted save a[i] in temp and make a hole at
                // position i
                let temp = arr[i];
  
                // shift earlier gap-sorted elements up until
                // the correct location for a[i] is found
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                    arr[j] = arr[j - gap];
  
                // put temp (the original a[i]) in its correct
                // location
                arr[j] = temp;
                stepCount++;
            }
        }
        return arr;
}
 
// Driver method
let arr = list;
document.write("Array before sorting<br>");
printArray(arr);
 
arr = sort(arr);
document.write("Array after sorting<br>");
printArray(arr);

console.log("step",stepCount);

//315