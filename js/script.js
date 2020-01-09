// alert ('ciao');
for (var i=1; i <= 100; i++){

 if (i % 15 == 0){
   console.log('FizzBuzz');
   document.getElementById('listaNumeri_quindici').innerHTML += ('<li>' + i + ' FizzBuzz ' + '</li>');
 }
 else if (i % 5 == 0){
   console.log('Buzz');
   document.getElementById('listaNumeri_cinque').innerHTML += ('<li>' + i + ' Buzz ' + '</li>');
 }
 else if (i % 3 == 0){
   console.log('Fizz');
   document.getElementById('listaNumeri_tre').innerHTML += ('<li>' + i + ' Fizz ' + '</li>');
 }
 else{
   console.log(i);
   document.getElementById('altri').innerHTML += ('<li>' + i + '</li>');
 }
}

// var listaNumeri = (i=1; i <= 100; i++);
// console.log(listaNumeri);

// for (var i=1; i <= 100; i++){
//  // console.log(i);
//
//  if (i % 3 != 0 && i % 5 != 0){
//    console.log(i);
//  }
//  else if (i % 5 == 0) {
//    console.log('Buzz');
//  }
//  else if (i % 15 == 0 && i % 3 !=0 && i % 5 !=0){
//    console.log('FizzBuzz');
//  }
//  else if((i % 3 == 0) && (i % 5 == 0) && (i % 15 == 0)){
//    console.log('Fizz' + ' ' + 'Buzz' + ' ' + 'FizzBuzz');
//  }
//  else if ((i % 3 == 0) && (i % 5 == 0)){
//    console.log('Fizz' +' ' + 'Buzz');
//  }
//  else if ((i % 3 == 0) && (i % 15 == 0)){
//    console.log('Fizz' + ' ' + 'FizzBuzz');
//  }
//  else if ((i % 5 == 0) && (i % 15 == 0)) {
//    console.log('Buzz' + '' + 'FizzBuzz');
//  }
//  else{
//    console.log(i);
//  }
// }

// while

// var i=1;
// while (i<5){
//   if (i % 3 == 0){
//     console.log('Fizz');
//   }
//   else if (i % 5 == 0) {
//     console.log('Buzz');
//   }
//   else if (i % 15 == 0){
//     console.log('FizzBuzz');
//   }
//   else if(i % 3 == 0 && i % 5 == 0 && i % 15 == 0){
//     console.log('Fizz' + ' ' + 'Buzz' + ' ' + 'FizzBuzz');
//   }
//   else if (i % 3 == 0 && i % 5 == 0){
//     console.log('Fizz' +' ' + 'Buzz');
//   }
//   else if (i % 3 == 0 && i % 15 == 0){
//     console.log('Fizz' + ' ' + 'FizzBuzz');
//   }
//   else if (i % 5 == 0 && i% 15 == 0) {
//     console.log('Buzz' + '' + 'FizzBuzz');
//   }
//   else{
//     console.log(i);
//   }
//   i++;
// }
