// const precioOriginal = 100;
// const descuento = 15;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function priceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = Number(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = Number(inputDiscount.value);

    const priceWithDiscount = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultParagraph");
    resultP.innerText = `El precio con descuento es de $ ${priceWithDiscount}`;
}




var codigosDeDescuento =
    [
        { codigo: "Manzana", descuento: 10 },
        { codigo: "Pera", descuento: 20 },
        { codigo: "Sandia", descuento: 30 },
        { codigo: "Luna", descuento: 40 }
    ];
function priceCodeDiscount() {
    const inputPrice = document.getElementById("InputPrice1");
    const priceValue = Number(inputPrice.value);

    const inputCode = document.getElementById("InputDiscountCode");
    const discountCodeValue = inputCode.value;

    var arrayCodeEntered = codigosDeDescuento.find(function(code) {
        return code.codigo == discountCodeValue;
    });



    const resultP = document.getElementById("ResultDiscountCodeParagraph");
    resultP.innerText = `Su codigo de descuento nos da un descuento de ${arrayCodeEntered.descuento} %`;

    // const priceWithDiscount = calcularPrecioConDescuento(priceValue, arrayCodigoIngresado.descuento);
    // const resultLastPrice = document.getElementById("ResultLastPriceParagraph");
    // resultLastPrice.innerText = `El precio con descuento son $ ${priceWithDiscount}`;


    const isCodeValid = function (code) {
        return code.codigo == discountCodeValue;
    };

    const arrayCodigoIngresado = codigosDeDescuento.find(isCodeValid);

    if (!arrayCodigoIngresado) {
        alert("El cupón " + discountCodeValue + " no es válido");
    } else {
        const discount = arrayCodigoIngresado.descuento;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);

        const resultP = document.getElementById("ResultLastPriceParagraph");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

}
