 function factorial(num){
  if (num == 0 || num == 1) {
    return 1;
  } else {
    var fact = 1;
    for (var i = 2 ; i <= num ; i++) {
      fact *= i;
    }
    return fact;
  }
}

console.log(factorial(5));
