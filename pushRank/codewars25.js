//multiple 3 OR 5
function solution(number){
  if(number <= 1){
      return 0

  }else{
      number--
      if(number % 3 === 0 || number % 5 === 0){
          return number + solution(number)

      }else{
          return 0 + solution(number)
      }
  }
}

console.log(solution(10))