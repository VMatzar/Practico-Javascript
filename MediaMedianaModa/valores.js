let valores = [], ol = document.createElement('ol');

//Integración con HTML
document.getElementById('myItemList').appendChild(ol);
let li;
valores.forEach(function (item) {
    li = document.createElement('li');
    ol.appendChild(li);

    let line = item;
    li.innerHTML += line;
});

//Agregar Valor
function addValue() {
    //Tomar datos
    let newValueInput = document.getElementById("InputNewValue");
    newValue = Number(newValueInput.value);

    if (newValue == 0) {
        alert(`Debe ingresar un valor númerico`);
    } else {

        //Agregar objeto con datos al array de colombia
        valores.push(newValue);

        //Mostrar en html el nuevo dato
        li = document.createElement('li');
        ol.appendChild(li);

        let line = newValue;
        li.innerHTML += line;
    }
}

//Mostrar resultado de calculo 
function showResult() {
    const resultP = document.getElementById("resultP");
    switch (document.getElementById('selectMedida').value) {
        case "promedio":
            resultP.innerText = "El promedio es: " + calcularMediaAritmetica(valores);
            break
        case "mediana":
            resultP.innerText = "La mediana es: " + calcularMediana(valores);
            break
        case "moda":
            resultP.innerText = "La moda es: " + calcularModa(valores);
            break
        case "promedioGeometrico":
            resultP.innerText = "El promedio geometrico es: " + calcularPromedioGeometrico(valores);
            break
    }
}