// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 3) == 3   // 1 + 2  = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum( a,b )
{
   //Good luck!
   if(a < b){ // 1 buat condition untuk membandingkan kedua parameter 'GetSum', jika 'a' lebih kecil dari 'b' lanjutkan ke langkah 2
     var temp = 0 // 2. buat variabel 'temp' dengan nilai 0
    for(var i = a; i <= b; i++){ // 3. lakukan perulangan dengan varibel i di asign dengan parameter a, dengan limit i lebih kecil sama dengan b, lalu increment variabel i dengan 1
        temp += i // 4. kalkulasikan variabel temp dengan i

    }
    return temp // 5. tampilkan 'temp' jika a kurang dari b

   }if(a > b){ // 6. buat condition untuk membandingkan kedua parameter 'GetSum', jika 'a' lebih besar dari 'b' lanjutkan ke langkah 7
       var temp = 0 // 7. buat variabel temp dengan nilai 0
       for(var i = a; i >= b; i--){ // 8. buat perulangan dengan variabel i dengan di asign dengan paramter a, dengan limit i lebih besar sama dengan b, decrement variabel i dengan 1
        temp += i // 9. kalulasikan temp dengan i

    }
    return temp // 10. tampilkan temp jika a lebih besar dari b
       

   }if(a === b){ // 11. jika a sama dengan b maka lakukan langkah 12
       return a // 12. tampilkan a 

   }
   
       
}

console.log(GetSum(-1, 0))
console.log(GetSum(1, 2))
console.log(GetSum(1, 0))
console.log(GetSum(1, 1))