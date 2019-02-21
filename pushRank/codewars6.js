function sumArray(array) {
    //Sum without highest and lowest number

    var newarr = 0
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++){
            if(array[i] < array[j]){
                var temp = array[i]
                array[i] = array[j]
                array[j] = temp

            }
        }

    }
    for(k = 0; k < array.length; k++){
        newarr += array[k]

    }
    var result = newarr - (array[0] + array[array.length-1])
    return result


}

console.log(sumArray([6, 2, 1, 8, 10]))
console.log(sumArray([1, 1, 11, 2, 3 ]))