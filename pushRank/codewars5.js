function printerError(s) {
    // your code
    // SOAL print error

    var alphabet = 'abcdefghijklm'
    var newarr = []
    
    for(var i = 0; i < s.length; i++){
        for(var j = 0; j < alphabet.length; j++){
            if(s[i] !== undefined){
                if(s[i] === alphabet[j]){
                    newarr.push(s[i])
                    s[i] = undefined

                }

            }

        }

    }
    var temp = s.length - newarr.length
    var result = temp + '/' + s.length
    return result


    
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))
console.log(printerError('xxxxxxx'))

