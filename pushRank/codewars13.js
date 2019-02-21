function order(words){
    // ...
    var angka = '123456789'
    var result = []
    var str = words.split(' ')
    for(var i = 0; i < angka.length; i++){
        for(var j = 0; j < str.length; j++){
          for(var k = 0; k < str[j].length; k++){
              if(angka[i] === str[j][k]){
                  result.push(str[j]) 

              }

          }
        }

    }
    return result.join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))