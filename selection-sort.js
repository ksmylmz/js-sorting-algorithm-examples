

////// selection sorting 
let list = [9,8,23,35,7,3];
let unsorted = list;
let cursor_id = 0;
console.log("unsorted selection list",unsorted);


for (let i = 0; i < list.length; i++) 
{
   cursor_id=i;
   for (let j = i+1; j < list.length; j++) 
   {

        if(list[j]<list[cursor_id])
        {
            cursor_id = j;
            swap(cursor_id,i);
        }

        
   }
    
}


function swap(x,y)
{
    let tempArea = list[x];
    list[x]=list[y];
    list[y] = tempArea;
}

console.log("sorted selection list",list);