//RECORRO EL ARREGLO INGRESADO CON MAP Y LA FUNCION ME TRAE SOLO EL DATO DE SALARY
const salariosCol = colombia.map(function(persona){
return persona.salary;
});

//ORDENA EL ARREGLO CON SORT
const salariosColSorted = salariosCol.sort(
    function (salaryA,salaryB){
        return salaryA - salaryB;
    }

);

//FUNCION ES PAR O IMPAR
function espar(numero){
    //SI LA DIVICION POR 2 DEL NUMERO ENTREGADO ES PAR(TRUE) SI ES IMPAR(FALSE)
    return (numero % 2 === 0);
};

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function(valorAcumulado = 0,nuevoElemento){
     return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
};

function medianaSalarios(lista){
    //EL PARSE INT SE UTILIZA PARA QUITAR LOS DECIMALES
    const mitad = parseInt(lista.length / 2);// SE CALCULA LA MITAD DEL ARREGLO INGRESANDO EL LARGO DEL ARRAY DIVIDIDO EN 2
    if(espar(lista.length)){
        //SI LA MITAD ES PAR QUIERE DECIR QUE HAY DOS VALORES QUE INGRESAR 
        const elemento1 = lista[mitad - 1];
        const elemento2 = lista[mitad];

        const mediana = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana;

    }else{
        //SI EL CALCULO ES IMPAR QUIERE DECIR QUE SOLO HAY UN NUMERO EN LA MITAD
        const personaMitad = lista[mitad];//POR ENDE SE REGRESA EL ARREGLO CON EL INDICE DE LA MITAD
        return personaMitad;
    }
};

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//mediana top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
spliceStart,
spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
medianaGeneralCol,
medianaTop10Col
});