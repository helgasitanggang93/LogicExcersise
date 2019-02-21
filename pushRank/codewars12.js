function isIsogram(str){
    //...
    var string = str.toLowerCase()
    var newarr = []
    
    for(var i = 0; i < string.length; i++){
        var flag = true
        for(var j = 0; j < string.length; j++){
            if(string[i] === newarr[j]){
                flag = false

            }
        

        }
        if(flag === true){
            newarr.push(string[i])

        }
    

    }
    if(newarr.length === str.length){
        return true

    }else{
        return false
    }
    
    
  }

  console.log(isIsogram('Dermatoglyphics'))
  console.log(isIsogram('apa'))