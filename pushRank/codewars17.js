function high(x){
    var kamus = ' abcdefghijklmnopqrstuvwxyz'
    var str = x.split(' ')
    var newArr = []
    for(var i = 0; i < str.length; i++){
        var count = 0
        for(var j = 0; j < str[i].length; j++){     
            for(var k = 0; k < kamus.length; k++){
                if(str[i][j] === kamus[k]){
                    count += k

                }

            }

        }
        newArr.push(count)

    }
    var indexOf = 0
    for(var i = 0; i < newArr.length; i++){
       for(var j = 0; j < newArr.length; j++){
           if(newArr[i] >= indexOf){
               indexOf = newArr[i]

           }

       }

    }
   var index = newArr.indexOf(indexOf)
   return str[index]

}

console.log(high('man i need a taxi up to ubud')) // taxi
console.log(high('what time are we climbing up the volcano')) //volcano
console.log(high('take me to semynak')) // semynak

