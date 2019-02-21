function isPrime(num) {
    //TODO
    if(num <= 1){
        return false

    }
    var count = 0
    for(var i = 1; i <= num; i++){
        if(num % i === 0){
            count++

        }

    }
    
    if(count === 2){
        return true

    }else{
        return false
    }
  }

  console.log(isPrime(0))
  console.log(isPrime(5))