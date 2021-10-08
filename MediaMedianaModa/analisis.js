// Helpers o Utils
/*Es par o no es par*/
function esPar(numero){
    return numero % 2 === 0;
}
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//En una lista guardamos solamente los salarios.
const salariosColombia = colombia.map(
    function(personaIterador){
        return personaIterador.salary;
    }
)

//En una lista ordenamos los salarios del mayor al menor. 
const salariosColSorted = salariosColombia.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

// CALCULO DE LA MEDIANA GENERAL
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad];
        const personaMitad2 = lista[mitad-1];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralColombia = medianaSalarios(salariosColSorted);

// CALCULO DEL TOP 10%
const spliceStart = (salariosColSorted.length * (100 - 10) / 100);
const spliceCount = (salariosColSorted.length - spliceStart);
const salariosColombiaTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Colombia = medianaSalarios(salariosColombiaTop10);

console.log({
    medianaGeneralColombia,
    medianaTop10Colombia
})