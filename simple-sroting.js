

////// basic sorting 
let list = [390,341,93,546,293,918,731,278,241,97,982,293,953,888,556,110,55,249,168,39,933,686,820,801,42,503,570,897,69,461,914,759,400,882,547,637,123,409,953,507,288,781,648,847,334,843,831,217,928,624,21,817,60,534,2,780,869,881,176,720,139,363,883,438,741,681,187,689,491,403,615,118,385,222,231,721,453,696,529,21,216,445,183,967,23,647,682,529,970,276,932,266,624,257,707,224,928,8,688];
let stepCount = 0;

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
            stepCount++;
        }
   }
    
}

console.log("sorted simple list",list);
console.log("step:",stepCount);