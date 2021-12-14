//Código del Cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
} 
function areaCuadrado(lado){
    return lado * lado;
} 

//Código del Triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//Código del Circulo
function diametroCirculo(radio){
    return radio * 2;
}
const pi = Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
function areaCirculo(radio){
    return (radio * radio) * pi;
}

//Código del Rectangulo
function perimetroRectangulo(base, altura){
    return 2 * ( base + altura);
}
function areaRectangulo(base, altura){
    return base * altura;
}


//Altura Triangulo isosceles
// function alturaIsosceles(ladoa, ladob, base){
//     if(ladoa===ladob && ladoa!=base){
//         const altura = Math.sqrt((ladoa*ladoa) - ((base*base)/4));
//         alert(`La altura del triangulo Isosceles es: ${altura}`);
//     }   else{
//         alert("El triangulo isosceles debe tener dos lados iguales y uno no, coloque los valores nuevamente");
//     }
// }

//Interacción con HTML:
// C U A D R A D O 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");//Devuelve valor string
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro es "+perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");//Devuelve valor string
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área es "+ area);
}


// T R I A N G U L O 
function calcularPerimetroTriangulo(){
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = Number(inputBase.value);

    const inputLado1 = document.getElementById("InputLado1Triangulo");
    const valueLado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const valueLado2 = Number(inputLado2.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(`El perimetro es ${perimetro}`);
}
function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = Number(inputBase.value);

    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const valueAltura = Number(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert("El área es "+ area);
}

//C I R C U L O 
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    alert("El perimetro es "+perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert("El área es "+ area);
}

//I S O S C E L E S 
// function calcularAlturaIsosceles(){
//     const inputLadoA = document.getElementById("InputLadoAIsosceles");
//     const valueLadoA = Number(inputLadoA.value);

//     const inputLadoB = document.getElementById("InputLadoBIsosceles");
//     const valueLadoB = Number(inputLadoB.value);

//     const inputBase = document.getElementById("InputBaseIsosceles");
//     const valueBase = Number(inputBase.value);

//     alturaIsosceles(valueLadoA, valueLadoB, valueBase);
// }

//R E C T A N G U L O
function calcularPerimetroRectangulo(){
    const inputBase = document.getElementById("InputBaseRectangulo");
    const valueBase = Number(inputBase.value);

    const inputAltura = document.getElementById("InputAlturaRectangulo");
    const valueAltura = Number(inputAltura.value);

    const perimetro = perimetroRectangulo(valueBase, valueAltura);
    alert("El perimetro es "+ perimetro);
}
function calcularAreaRectangulo(){
    const inputBase = document.getElementById("InputBaseRectangulo");
    const valueBase = Number(inputBase.value);

    const inputAltura = document.getElementById("InputAlturaRectangulo");
    const valueAltura = Number(inputAltura.value);

    const area = areaRectangulo(valueBase, valueAltura);
    alert("El area es "+ area);
}
