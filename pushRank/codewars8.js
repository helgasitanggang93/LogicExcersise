function noSpace(x){
    var temp = ''
    for(var i = 0; i < x.length; i++){
        if(x[i] !== ' '){
            temp += x[i]
        }
        

    }
    return temp
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))