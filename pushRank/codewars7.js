function countPositivesSumNegatives(input) {

    var tempPositive = 0
    var tempNegative = 0
    var newarr = []
    for(var i = 0; i < input.length; i++) {
        if(input[i] > 0) {
            tempPositive +=1

        }else if(input[i] < 0){
            tempNegative += input[i]

        }

    }
    newarr.push(tempPositive, tempNegative)
    return newarr
 
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
