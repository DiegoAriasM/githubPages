
const aplicarDescuento = new Promise(function(resolve, reject){
    const descuento = false;
    if(descuento){
        resolve('Descuento Aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then(function(){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
});