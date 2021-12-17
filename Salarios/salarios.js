let colombia = [], ol = document.createElement('ol');
colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});

//Integración con HTML
document.getElementById('myItemList').appendChild(ol);
let li;
colombia.forEach(function (item) {
  li = document.createElement('li');
  ol.appendChild(li);

  let line = `${item.name} = $${item.salary}`;
  li.innerHTML += line;
});

//Agregar empleado
function addEmployee() {
  //Tomar datos
  let employee = document.getElementById("InputName");
  valueName = employee.value;

  let salaryEmployee = document.getElementById("InputSalary");
  valueSalaryEmployee = Number(salaryEmployee.value);

  if (valueName == "" || valueSalaryEmployee == 0) {
    alert(`Debe ingresar el nombre y salario para agregar`);
  } else {
    //Objeto con datos
    let nuevoEmpleado = {
      name: valueName,
      salary: valueSalaryEmployee
    };

    //Agregar objeto con datos al array de colombia
    colombia.push(nuevoEmpleado);

    //Mostrar en html el nuevo dato
    li = document.createElement('li');
    ol.appendChild(li);

    let line = `${valueName} = $${valueSalaryEmployee}`;
    li.innerHTML += line;

    //Alerta 
    alert(`¡Los datos del empleado ${valueName} han sido registrados!`)
  }
}
