$(document).ready(function(){
  var foo = true;
  var bar = false;
  
  console.log('foo = ' + foo);
  console.log('bar = ' + bar);

  console.log('!foo = ' + !foo);
  console.log('!bar = ' + !bar);

  console.log('foo || bar = ' + (foo || bar));
  console.log('bar || foo = ' + (bar || foo));
  
  console.log('foo && bar = ' + (foo && bar));
  console.log('bar && foo = ' + (bar && foo));
});