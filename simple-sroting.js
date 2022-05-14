

////// basic sorting 
let list = [2,3,1,5];

console.log("unsorted simple list",list);

let tempArea=0; 


    /**
    * soldan saga dogru cursor işleminde
    * ilk karşılaştırma değeri (list[i]) 
    * ikinci karşılaştırma değerinden(list[j]) büyükse
    * birinci ve ikinci değer yer değiştirilir
    * 1- değiştirilecek değer temp değişkene aktarılır
    * 2- kaydırılacak küçük değer ilk değere atanır
    * 3- ikinci değere ise temp alana alınmış değişkenin değeri 
    * aktarılır
    * 4- temp değişken ilk değerine geri döndürülür(clean işlemi)
    * bu işlem her bir index'in tüm diğer indexlerle karşılaştırılması bitene kadar devam eder
    * böylece küçükten büyüğe sıralama işlemi gerçekleşmiş olur.
    * büyükten küçüğe sıralama için koşul tam tersi olacak şekilde uygulanmalıdır
    */

for (let i = 0; i < list.length; i++) 
{
   for (let j = i+1; j < list.length; j++) 
   {
        if(list[j]>list[i])
        {
            tempArea = list[i];
            list[i]=list[j];
            list[j] = tempArea;
            tempArea=0;
        }
   }
    
}

console.log("sorted simple list",list);