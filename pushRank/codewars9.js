function isOpposite(s1,s2){
    /* coding here... https://www.codewars.com/kata/they-say-
    that-only-the-name-is-long-enough-to-attract-attention-they-also-said-
    that-only-a-simple-kata-will-have-someone-to-solve-it-this-is-a-sadly-story-number-
    1-are-they-opposite/train/javascript
    */
    if(s1.length !== s2.length || s1.length === 0 && s2.length === 0){
        return false

    }

    var temp = 0
    for(var i = 0; i < s1.length; i++){
        
        if(s1[i] === s1[i].toLowerCase() && s2[i] === s2[i].toUpperCase() || s1[i] === s1[i].toUpperCase() && s2[i] === s2[i].toLowerCase()){
            temp += 1

        }

    }

    if(temp === s1.length){
        return true

    }else{
        return false
    }
    
    
    
  }

console.log(isOpposite("ab","AB")) //should return true;
console.log(isOpposite("aB","Ab")) //should return true;
console.log(isOpposite("aBcd","AbCD")) //should return true;
console.log(isOpposite("AB","Ab")) //should return false;
console.log(isOpposite("","")) //should return false;