function accum(s) {
    // your code
    var conArr = s.split('')
    var counter = 1
    var newArr = []
    for (var i = 0; i < conArr.length; i++) {
        var temp = ''
        for(var j = 0; j < counter; j++){
            if(j === 0){
                temp += conArr[i].toUpperCase()

            }else{
                temp += conArr[i].toLowerCase()
            }

        }
        counter++
        newArr.push(temp)
        
    }
    var result = newArr.join('-')
    return result
    
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));

