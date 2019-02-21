function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  var date1 = new Date(currentDate)
  var date2 = new Date(expirationDate)
  if(enteredCode === correctCode){
      if(date1 <= date2 ){
          return true

      }else{
          return false
      }
      
  }
  return false
  
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))