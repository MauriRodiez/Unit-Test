
const suma = (a,b) => {
    if(isNaN(a) || isNaN(b)){
        return 0;
    }else{
        return a+b;
    }
}

module.exports = suma;
// console.assert(suma(1,2) == 3, 'ERROR: el resultado esperado de 1 + 2 es 3');

// console.assert(suma(0,0) == 0, 'ERROR: el resultado esperado de 0 + 0 es 0');