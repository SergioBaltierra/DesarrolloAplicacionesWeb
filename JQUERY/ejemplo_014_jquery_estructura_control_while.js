$(document).ready(function(){
  var sumatoria = 0;
  var productora = 1;
  
  var i = 0;
  while (i < 10) 
  {
    console.log('Actualmente en ' + i);

    sumatoria = sumatoria + i;
    
    if(i!=0)
    {
      productora = productora * i;
    }

      i++; // incrementa la variable i
  }

  console.log("Resultado sumatoria: " + sumatoria);
  console.log("Resultado productora: " + productora);
});