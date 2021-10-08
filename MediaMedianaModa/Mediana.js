function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(Numero){
    if(Numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}
function comparar ( a, b ){ return a - b; }

function calcularMediana(listadesordenada){
    const mitadLista = parseInt(listadesordenada.length/2);
    const lista = listadesordenada.sort( comparar ); 
    let mediana;
    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2])
        mediana = promedioElemento1y2;
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
}