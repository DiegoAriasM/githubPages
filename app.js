document.getElementById('cargar').addEventListener('click', cargardatos);

function cargardatos() {
    //Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    //una vez que carga
    xhr.onload = function() {
        // 200: Correcto | 403 : Prohibido | 404 : No encontrado
        if(this.status === 200){
            console.log(this.responseText);
        }
    }
    //Enviar el request
    xhr.send();
}