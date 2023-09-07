//const suma = require('../calculadora.js');
//const resta = require('../calculadora.js');
//const multiplicacion = require('../calculadora.js');
//const division = require('../calculadora.js');

const { suma, resta, multiplicacion, division } = require("../calculadora.js");

describe("Prueba de sumas", () => {
  test("suma de dos numeros", () => {
    expect(suma(1, 2)).toBe(3);
  }); 

  test("suma de cero", () => {
    expect(suma(0, 0)).toBe(0);
  });

  test("suma de NULL", () => {
    expect(suma(null, null)).toBe(0);
  });

  test("suma de caracteres", () => {
    expect(suma("a", "b")).toBe(0);
  });
});

describe("Prueba de restas", () => {
  test("resta de dos numeros", () => {
    expect(resta(4, 2)).toBe(2);
  });

  test("resta con cero", () => {
    expect(resta(0, 0)).toBe(0);
  });

  test("resta de NULL", () => {
    expect(resta(null, null)).toBe(0);
  });

  test("resta con caracteres", () => {
    expect(resta("a", "b")).toBe(0);
  });
});

describe("Prueba de multiplicacion", () => {
  test("Multiplica dos numeros", () => {
    expect(multiplicacion(3, 2)).toBe(6);
  });

  test("Multiplica cero", () => {
    expect(multiplicacion(0, 0)).toBe(0);
  });

  test("Multiplica con NULL", () => {
    expect(multiplicacion(null, null)).toBe(0);
  });

  test("Multiplica con caracteres", () => {
    expect(multiplicacion("a", "b")).toBe(0);
  });
});

describe("Prueba de division", () => {
  test("Division de dos numeros", () => {
    expect(division(8, 2)).toBe(4);
  });

  test("Division con cero", () => {
    expect(division(0, 0)).toBe(0);
  });

  test("Division con NULL", () => {
    expect(division(null, null)).toBe(null);
  });

  test("Division con caracteres", () => {
    expect(division("a", "b")).toBe(0);
  });
});
