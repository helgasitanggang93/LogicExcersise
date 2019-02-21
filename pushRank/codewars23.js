function findOdd(A) {
    //happy coding!
    var zoo = []
    for(var i = 0; i < A.length; i++){
        var kandang = []
        var flag = true
        for(var j = 0; j < zoo.length; j++){
            if(A[i] === zoo[j][0]){
                zoo[j].push(A[i])
                flag = false

            }

        }if(flag === true){
            kandang.push(A[i])
            zoo.push(kandang)

        }

    }
    
    var result = []
    for(var i = 0; i < zoo.length; i++){
        if(zoo[i].length % 2 === 1){
            result.push(zoo[i][0])

        }

    }
    return result[0]
    
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])) //5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])) // -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])) // 5
console.log(findOdd([10])) // 10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])) // 10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])) // 1