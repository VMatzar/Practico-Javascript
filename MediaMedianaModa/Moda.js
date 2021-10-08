// const lista = [1,2,3,1,2,4,2,2,2,1];

function calcularModa(lista){
    const listaContador = {};

    //Método map recorre el array
    lista.map(
        function(elementoIterador){
            if(listaContador[elementoIterador]){
                listaContador[elementoIterador] += 1;
            }else{
                listaContador[elementoIterador] = 1;
            }
        }
    );
    
    //Mandamos como argumento el objeto que queremos enviar como array.
    const listaArray = Object.entries(listaContador).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = listaArray[listaArray.length - 1];
    return moda;
}