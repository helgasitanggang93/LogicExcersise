function incrementString (strng) {
    // return incrementedString

    var kamus = '1234567890'
    var temp = ''
    // var potong = []
    for(var i = 0; i < strng.length; i++){
        for(var j = 0; j < kamus.length; j++){
            if(strng[i] === kamus[j]){
                temp += Number(strng[i])
                
            }
            
        }
    
    }
    var arr = Number(temp)
    var cek = '123456789'
    var result = ''
    for(var i = 0; i < strng.length; i++){
        var flag = true
       for(j = 0; j < cek.length; j++){
           if(strng[i] === cek[j]){
               
               flag = false
           }

       }
       if(flag === true){
           result += strng[i]

       }

    }
    return result+(arr+1)
    
  }

  console.log(incrementString('foobar0100'))
  console.log(incrementString('foobar01000'))
  console.log(incrementString('foobar'))
  console.log(incrementString(''))