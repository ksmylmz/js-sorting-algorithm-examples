

////// selection sorting 
let list = [390,341,93,546,293,918,731,278,241,97,982,293,953,888,556,110,55,249,168,39,933,686,820,801,42,503,570,897,69,461,914,759,400,882,547,637,123,409,953,507,288,781,648,847,334,843,831,217,928,624,21,817,60,534,2,780,869,881,176,720,139,363,883,438,741,681,187,689,491,403,615,118,385,222,231,721,453,696,529,21,216,445,183,967,23,647,682,529,970,276,932,266,624,257,707,224,928,8,688];
let unsorted = list;
let cursor_id = 0;
let stepCount = 0;
let swapped=false;
console.log("unsorted selection list",unsorted);

for (i = 0; i < list.length-1; i++)
{
    for (j = 0; j < list.length-i-1; j++)
    {
        if (list[j] > list[j+1])
        {
        swap(j,j+1);
         
        }
    }
 
}

function swap(x,y)
{
    let tempArea = list[x];
    list[x]=list[y];
    list[y] = tempArea;
    stepCount++;
}


console.log("sorted selection list",list);
console.log("step",stepCount);