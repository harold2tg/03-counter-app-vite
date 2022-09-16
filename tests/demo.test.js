
describe('Pruebas en ,<demoComponent />', ()=>{
test('esta prueba no puede fallar', () => { 
    // 1.  Iniciacion 
    const mensaje1 = 'Hola Harold';

    // 2. estimulo
    const mensaje2 = mensaje1.trim();

    // 3. Observar el comportamiento ... esperado
    expect(mensaje1).toBe(mensaje2);
 });

});