function ajax(url,metodo,funcion){
          const xhttp = new XMLHttpRequest();
     
          xhttp.onload = function() {
                 let respuesta = JSON.parse(this.responseText);
                 funcion(respuesta);
          }
          xhttp.open(metodo,url, true);
          xhttp.send();
}
    