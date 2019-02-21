function alphabetPosition(text) {

    var alphabet = 'abcdefghijklmnopqrstuvwxyz' // 1. buat variabel kamus alphabet a-z di variabel 'alphabet'
    var newarr = [] // 2. buat array kosong dengan nama 'newArr'
    for(var i = 0; i < text.length; i++){ // 3. buat perulangan dengan variabel i dengan nilai 0, dengan limit i lebih kecil dari panjang 'text', increment i dengan 1
        for(var j = 0; j < alphabet.length; j++){ //4. buat perulangan kedua didalam dengan variabel j, dengan limit jika j lebih kecil dari panjang 'alphabet, increment i dengan nilai 1'
            if(text[i].toLowerCase() === alphabet[j]){// 5. buat condition jika teks indeks i (dengan dijadikan huruf besar supaya bisa di bandingkan) sama dengan alphabet indeks j
                newarr.push(String(j+1)) // 6. masukkan indeks j di tamnbah 1 (dengan dibungkus String) kedalam 'newArr' 

            }

        }

    }
    
   var result = newarr.join(' ') // 7. buat variabel 'result' dengan 'newArr' di join berdasarkan ' '
   return result // 8. tampilkan result

  }


 console.log(alphabetPosition("The sunset sets at twelve o' clock.")) // 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11

