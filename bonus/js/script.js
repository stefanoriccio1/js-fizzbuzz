alert ('ciao');
// for (var i=1; i <= 100; i++){
//  // console.log(i);
//  if (i % 15 == 0){
//    console.log('FizzBuzz');
//  }
//  else if (i % 5 == 0 && i%15 != 0){
//    console.log('Buzz');
//  }
//  else if (i % 3 == 0 && i%15 != 0){
//    console.log('Fizz');
//  }
//  else{
//    console.log(i);
//  }
// }
// while

var i=1;
while (i<100){
  if (i % 15 == 0){
    console.log('FizzBuzz');
  }
  else if (i % 5 == 0 && i%15 != 0){
    console.log('Buzz');
  }
  else if (i % 3 == 0 && i%15 != 0){
    console.log('Fizz');
  }
  else{
    console.log(i);
  }
  i++;
}
