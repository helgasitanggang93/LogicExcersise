function sortArray(array) {
    // I. secene ini untuk melakukan pengurutan data yang ganjil----
    
    for(var i = 0; i < array.length; i++){ // 1. lakukan perulangan pada 'array' 
        for(var j = 0; j < array.length; j++){ // 2. lakukan perulngan kembali pada 'array' untuk di bandingkan
            if(array[i] % 2 !== 0 && array[j] % 2 !== 0){ //3. cek 'array' indeks i dengan 'array' indeks j untuk memastikan kedua value memiliki angka ganjil
                if(array[i] < array[j]){ // 4. bandingkan 'array' indeks i dengan array indeks j, jika array indeks i lebih kecil dari array indeks j, maka lakukan langkah 5
                    var temp = array[i] // 5. buat variabel tampung untuk menyimpan array indek ke i
                    array[i] = array[j] // 6. asign array ke indeks ke i dengan array indeks ke j
                    array[j] = temp // 7. asign array indek ke j dengan 'temp', dimana temp menyimpan array indek ke i

                }

            }

        }

    }

    if(array.length === 0){ // 9. lakukan pengecekan pada jumlah deret array, jika deret array tidak memiliki data maka lakukan langka 10 jika tidak lakukan langkah 12
        return [] // 10. menampilkan array kosong

    }

    return array // 12. tampilkan 'array' yang sudah di urutkan
    
  }

  console.log(sortArray([5, 3, 2, 8, 1, 4])) //[ 1, 3, 2, 8, 5, 4 ]
  console.log(sortArray([5, 3, 1, 8, 0])) // [ 1, 3, 5, 8, 0 ]
  console.log(sortArray([1, 3, 2, 8, 5, 4, 11])) //[ 1, 3, 2, 8, 5, 4, 11 ]