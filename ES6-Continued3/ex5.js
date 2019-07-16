
 var letters = "0123456789ABCDEF"; 
  
 var color = '#'; 

  for (var i = 0; i < 6; i++) 
    color += letters[(Math.floor(Math.random() * 16))]; 
    document.body.setAttribute("style", "background-color: " + color + "; font-family: ");

document.write(color); 