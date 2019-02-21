/*

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text){
    //...
    var counter = 0
    var kandang = []
    
    var str = text.toLowerCase()
    for(var i = 0; i < str.length; i++){
        var rumah = []
        if(kandang.length === 0){
            rumah.push(str[i])
            kandang.push(rumah)
            
        }else if(kandang[counter][0] === str[i]){
            kandang[counter].push(str[i])


        }else{
            rumah.push(str[i])
            kandang.push(rumah)
            counter++
        }

    }
    
    var temp = 0
    for(var j = 0; j < kandang.length; j++){
        if(kandang[j].length > 1){
            temp += 1

        }

    }
    return temp

}

console.log(duplicateCount('aabBcde'))
console.log(duplicateCount('AabBc221'))
console.log(duplicateCount('bcaaaaaaaaaab'))

