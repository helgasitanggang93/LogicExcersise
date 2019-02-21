function isPangram(string){
    //...
   var kamus = 'abcdefghijklmnopqrstuvwxyz'
   var conKamus = kamus.split('')
   
   for(var i = 0; i < string.length; i++){
       for(var j = 0; j < conKamus.length; j++){
           if(conKamus[j] !== false){
               if(string[i].toLowerCase() === conKamus[j]){
                   conKamus[j] = false

               }

           }

       }

   }
   
   var temp = 0
   for(var i = 0; i < conKamus.length; i++){
       if(conKamus[i] === false){
           temp++

       }

   }
   
   if(temp === kamus.length){
       return true

   }else{
       return false
   }
    
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog."));
//   console.log(isPangram("This is not a pangram."));
//   console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ is  a pangram "));
  
  
  