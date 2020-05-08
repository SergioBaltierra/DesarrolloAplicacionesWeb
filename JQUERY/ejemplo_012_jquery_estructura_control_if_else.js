$(document).ready(function(){
  var foo = true;
  var bar = false;

  if (bar) 
  {
    // este codigo nunca se ejecutara
    console.log('if bar');
  }

  if (bar) 
  {
    // este codigo no se ejecutara
    console.log('if bar');
  } 
  else 
  {
    if (foo) 
    {
      // este codigo se ejecutara
        console.log('else if foo');
      } 
      else 
      {
        // este codigo se ejecutara si foo y bar son falsos (false)
      console.log('else else foo');
      }
  }
  
});