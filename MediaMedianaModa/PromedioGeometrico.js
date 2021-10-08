function calcularPromedioGeometrico(lista){
    const cantLista = lista.length;
    const productoLista = lista.reduce(
        function(valorAcumulado = 1, nuevoElemento){
            return valorAcumulado * nuevoElemento;
        }
    );
    const promedioGeometrico = Math.pow(productoLista, 1/cantLista);
    return promedioGeometrico;
}