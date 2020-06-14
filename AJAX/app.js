document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    //Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange = function(){

        console.log(`Estado ${this.readyState}`);
        if(this.readyState === 4 && this.status === 200){
            //console.log(this.responseText);
        }
    }
    //Enviar el request
    xhr.send();
}