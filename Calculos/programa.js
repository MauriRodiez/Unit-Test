const suma = (a,b) => a + b;

const resta = (a,b) => a - b;

const multiplicacion = (a,b) => a * b;

const division = (a,b) => {
    if(a === 0 || b === 0){
        console.log("No es posible realizar una division con 0, ingrese otro numero");
    }
    return a / b;
}

const calculadora = (n1, n2, operacion) => {

    if(typeof n1 !== "number" || typeof n2 !== "number"){
        return console.log("No es posible realizar la operación con estos valores, favor ingresar solo numeros!");
    }

    switch (operacion) {
        case "suma":
            return suma(n1,n2);
            break;

        case "resta":
            return resta(n1,n2);
            break;    

        case "multiplicacion":
            return multiplicacion(n1,n2);
            break;

        case "division":
            return division(n1,n2);
            break;
        
        default:
            console.log("Debe indicar un tipo de operacion para realizar");
            break;
    }
}

let operacionSuma = calculadora(2, null, "suma");
console.log(operacionSuma);
console.log("-----------------------");
let operacionResta = calculadora("a", 3, "resta");
console.log(operacionResta);
console.log("-----------------------");
let operacionMuliplicacion = calculadora(5,2.3,"multiplicacion");
console.log(operacionMuliplicacion);
console.log("-----------------------");
let operacionDivision = calculadora(20,0,"division");
console.log(operacionDivision);
console.log("-----------------------");
let operacionSinDatos = calculadora();
console.log(operacionSinDatos);