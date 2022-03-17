 
 let funcionClick = function(){ 
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;

    let funcAjax = function(respuesta){ 
        document.getElementById('email').style = 'border:1px solid red;';
         document.getElementById('errorres').innerText =  respuesta.message;
     }

     let url= "https://desolate-island-95487.herokuapp.com/api/v1/login/" +email+ "/" +password;
     
     ajax(url,'GET', funcAjax);
 }

 console.log('ELEMENTO =>', document.getElementById("login-button"));
 document.getElementById("login-button").addEventListener("click",funcionClick);


//  1 - Agregar evenlistener al boton de Log In 
//  2 - Dentro del evenlistener hay que poner todo el código que está arriba  
//  3 - Hay que tomar los valores de usuario y pass y almacenarlos en una variable 
//  4 - Hay que armar la url del servicio concatenando usuario y pass  