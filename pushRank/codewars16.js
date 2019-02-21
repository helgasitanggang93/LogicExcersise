function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    var tempArray = []

    for(var i = 0; i < array.length; i++){
        tempArray.push(array[i].length)

    }
    
    for(var i = 0; i < tempArray.length; i++){
        for(var j = 0; j < tempArray.length; j++){
            if(tempArray[i] < tempArray[j]){
                var temp = tempArray[i]
                tempArray[i] = tempArray[j]
                tempArray[j] = temp

            }

        }

    }

    var result = []
    
    for(var i = 0; i < tempArray.length; i++){
        for(var j = 0; j < array.length; j++){
                if(array[j].length === tempArray[i]){
                    result.push(array[j])
                    break

                }

        }

    }
    return result
    
  }

  console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))
  console.log(sortByLength(["Beg", "Life", "I", "To"]))

  /*

  the short way 
  function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
};


  */