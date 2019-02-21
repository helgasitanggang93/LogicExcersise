function solution(string) {
    var newArr = []
    for(var i = 0; i < string.length; i++){
        
        if(string[i] === string[i].toUpperCase()){
            newArr.push(' ')

        }
        newArr.push(string[i])

    }
    return newArr.join('')
   
}

console.log(solution('camelCasing')) // camel Casing