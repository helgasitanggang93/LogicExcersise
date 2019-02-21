function getMin(arr) {
    var result = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i]

        }

    }
    return result

}

function getMax(arr) {
    var result = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i]

        }

    }
    return result

}

function getSum(arr) {
    var result = 0
    for (var i = 0; i < arr.length; i++) {
        result += arr[i]

    }
    return result

}

function getAvg(arr) {
    var summary = getSum(arr)
    return Math.round(summary / arr.length)

}

function getModus(arr) {
    var sumMod = 0
    for(var i = 0; i < arr.length; i++){
        sumMod += arr[i]

    }
    var cekMod = sumMod/arr.length
    if(cekMod === arr[0]){
        return 'All Numbers Are Same'

    }

    var tempAngka = 0
    var tempIndex = 0
    for(var i = 0; i < arr.length; i++){
        var counTemp = 0
        for(var j = 0; j < arr.length; j++){
            if(i !== j){
                if(arr[i] === arr[j]){
                    counTemp++

                }

            }

        }if(counTemp > tempAngka){
            tempAngka = counTemp
            tempIndex = i

        }

    }
    
    if(tempAngka === 0){
        return 'No modus'

    }else{
        return arr[tempIndex]
    }
}

function getMedian(arr){
    if(arr.length <= 1){
        return 'There is no Median'

    }else if(arr.length % 2 === 1){
        var MedGan = (arr.length + 1) / 2
        return arr[MedGan-1]

    }else{
        var MedGen = arr.length / 2
        return (arr[MedGen] + arr[MedGen-1]) / 2
    }

}
function MaxMinSumAvgModMed(input){
    var resultMax = getMax(input)
    var resultMin = getMin(input)
    var resultSum = getSum(input)
    var resultAvg = getAvg(input)
    var resultModus = getModus(input)
    var resultMedian = getMedian(input)
    return 'Max: ' + '('+resultMax+')' 
    + ' Min: ' + '('+resultMin+')' 
    + ' Sum: ' + '('+resultSum+')' 
    + ' Average: ' + '('+resultAvg+')' 
    + ' Modus: ' + '('+resultModus+')'
    + ' Median: ' + '('+resultMedian+')' 

}
console.log(MaxMinSumAvgModMed([5, 10, 1, 6, 5, 7])); 
console.log(MaxMinSumAvgModMed([7, 5, 3, 1, 2, 8])); 
