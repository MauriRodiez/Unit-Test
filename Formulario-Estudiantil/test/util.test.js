
const { generateText, validateInput } = require("../util");

describe("Pruebas positivas", ()=>{

    test("Prueba de edad entre 18 y 65", () => {
        expect(generateText("Roberto",21, "1A")).toBe("Registro OK de Roberto en: 1A.");
    }) 

    test("Prueba de edad > 65", () => {
        expect(generateText("Roberto", 70, null)).toBe("No pudimos registrar a: Roberto. Por favor contactá a soporte@dh.com para más información.");
    })

    test("Validar si algo distinto a texto", () =>{
        expect(validateInput(null, " ")).toBeFalsy();
    })

    test("Validar si el campo no esta vacio y sin espacios", () => {
        expect(validateInput("     ", true)).toBeFalsy();
    })

})

describe("Pruebas negativas", () => {

    test("Prueba de edad menor a 18", () => {
        expect(generateText("Roberto", 17, "1A")).toBe("Edad ingresada no válida. Por favor intentá nuevamente.");
    })

    test("Prueba para validar campos invalidos", () => {
        expect(validateInput(1321, false)).toBeTruthy();
    })

})