$(document).ready(function(){
  var sumatoria = 0;
  var productora = 1;
  
  for (var i = 0, limit = 10; i < limit; i++) 
  {
    console.log('Actualmente en ' + i);
    sumatoria = sumatoria + i;
    if(i!=0)
    {
      productora = productora * i;
    }
  }

  console.log("Resultado sumatoria: " + sumatoria);
  console.log("Resultado productora: " + productora);
});