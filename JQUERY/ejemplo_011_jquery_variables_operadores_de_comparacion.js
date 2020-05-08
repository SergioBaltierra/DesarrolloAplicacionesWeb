$(document).ready(function(){  
  var foo = 1;  
  var bar = 0;  
  var baz = '1';  
  var bim = 2;

  console.log('foo = ' + foo);  
  console.log('bar = ' + bar);  
  console.log('baz = ' + "'" + baz + "'");  
  console.log('bim = ' + bim);

  console.log('foo == bar = ' + (foo == bar));  
  console.log('foo != bar = ' + (foo != bar));  
  console.log('foo == baz = ' + (foo == baz));

  // operador estrictamente igual, no solo el valor tambien el tipo de dato.
  console.log('foo === baz = ' + (foo === baz));
  // operador estrictamente desigual, no solo valor tambien el tipo de dato. 
  console.log('foo !== baz = ' + (foo !== baz));  
  console.log('foo === parseInt(baz) = ' + (foo === parseInt(baz)));

  console.log('foo > bim = ' + (foo > bim));  
  console.log('bim > baz = ' + (bim > baz));  
  console.log('foo <= baz = ' + (foo <= baz));  
  console.log('foo >= baz = ' + (foo >= baz));
});