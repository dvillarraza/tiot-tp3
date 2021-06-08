const { Before, Given, When, Then } = require('@cucumber/cucumber')
const expect = require("chai").expect;

const Lista = require("../../src/lista.js")
let contexto = {} //Es un objeto que se va a utilizar para realizar las distintas pruebas

//Se crea una lista vacia
Given('una lista vacía', function () {
    contexto.lista = new Lista()  
});

//Se aregan los elemntos del vector en la lista 
Given('una lista con los siguientes elementos', function (vector) {
    vector = vector.rawTable;
    contexto.lista = new Lista();
    for(var indice = 0; indice < vector.length; indice++){
        expect(contexto.lista.add(vector[indice][0], vector[indice][1])).to.be.equal(true);
    }
});

//Se agrega un elemento en la lista
//Se utiliza un parametro del tipo string para el nombre de la clave, 
//el parametro valor puede ser cualquier cosa
When('agrego la clave {string} con el valor {}', function (clave, valor) {
    expect(contexto.lista.add(clave,valor)).to.be.true;
});


//Se borra un elemento de la lista
//Se utiliza un parametro del tipo string para el nombre de la clave 
When('borro la clave {string}', function (clave) {
    expect(contexto.lista.delete(clave)).to.be.true;
});


//Se utiliza un parametro del tipo int para la cantidad de elementos de la lista
Then('la lista tiene {int} elemento(s) almacenado(s)', function (cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

//Se utiliza un parametro del tipo string para el nombre de la clave
Then('si busco la clave {string} no obtengo ningun valor', function (clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;
});

//Se utiliza un parametro del tipo string para el nombre de la clave,
//el parametro valor puede ser cualquier cosa
Then('si busco la clave {string} obtengo el valor {}', function (clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);
});

//Se utiliza un parametro del tipo string para el nombre de la clave,
Then('si busco la clave {string} no existe', function (clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;
});


//Se pasa como parametro la lista ordenada para comparar el resultado
Then('el resultado es la siguiente lista ordenada', function (claves) {

    expect(contexto.lista.clavesOrdenadas()).to.deep.equal(claves.transpose().rawTable[0]);
});

