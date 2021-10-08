const lista = [
    100,
    200,
    300,
    500
];


function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    // let sumaLista= 0; 
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista =  sumaLista + lista[i];
    // }
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}