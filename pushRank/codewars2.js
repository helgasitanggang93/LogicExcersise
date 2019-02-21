// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
//[8(2,3), 4(2,2) , 2(2,1) ,1(2,0)] length*2

// 3 - 3
// 2 - 3
// 1 - 3
// 0 - 3
function binary(arr){
    var result = 0 // 1. Buat variabel, dan tampung nilai 0
    for(var i = arr.length-1; i >= 0; i--){ // 2. lakukan perulangan terbalik untuk mengetahui nilai 1 berada di indeks keberpa 
        if(arr[i] === 1){ // 3. buat condition jika indeks arr i sama dengan 1 maka lanjutkan ke langkah berikutnya
            var tempPangkat = Math.abs(i - (arr.length-1)) // 4. buat variebel 'tempPangkat' untuk menampung indeks i di kurangi dengan panjang 'arr' di kurangi 1, bungkus (indeks i di kurangi dengan panjang 'arr' di kurangi 1) dengan Math abs untuk menghilangkan minus
            var temp = Math.pow(2, tempPangkat) // 5. buat variabel 'temp' untuk menampung Math.pow(built in function pemangkat) untuk melakukan pemangkatan
            result += temp // 6. kalkulasikan result dengan temp

        }

    }
    return result // 7 tampilkan result untuk hasil
    

}

console.log(binary([1, 1, 1, 1])) // 2^0 + 2^1 + 2^2 + 2^3 ---> 1 + 2 + 4 + 8
console.log(binary([1, 0, 1, 0])) // 2 + 8 
