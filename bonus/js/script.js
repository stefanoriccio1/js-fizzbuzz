// alert ('ciao');

var i=1;
while (i<100){
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
  i++;
}
