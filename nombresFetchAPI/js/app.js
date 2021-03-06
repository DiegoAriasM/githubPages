document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

//Llamado a ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    //Leer las variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

   

    let url ='';
    url += 'http://uinames.com/api/?';

    if(origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }

    if(generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    if(cantidad !== '') {
        url += `amount=${cantidad}&`;
    }
     fetch(url)
          .then(function(res){
               return res.json();
          })
          .then(function(data){

               let html = '<h2>Nombres generados</h2>';
               html += '<ul class="lista">';
               data.forEach(function(nombre){
                    html += `
                         <li>${nombre.name}</li>
                    `;
               })
               html += '</ul>';
               document.querySelector('#resultado').innerHTML = html;
          })
          .catch(function(error){
               console.log(error);
          })

     }
   