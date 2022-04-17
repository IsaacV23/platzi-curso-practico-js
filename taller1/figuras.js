//INICIO CUADRADO
//CONSOLE.GROUP AGRUPA TODOS LOS CONSOLE.LOG HATA EL CONSOLE.GROUPEND
console.group("Cuadrado");
//perimetro
function perimetroCuadrado(lado){
  return lado * 4;
}; 
//area
function areaCuadrado(lado){
    return lado * lado;
};
console.groupEnd();
//FIN CUADRADO

//INICIO TRIANGULO
console.group("triangulo");
//perimetro
function perimetroTriangulo (lado1,lado2,base){
    return lado1 +lado2 + base;
}
//area
function areaTriangulo(base,altura){
    return (base*altura)/2;
};
console.groupEnd();
//FIN TRIANGULO

//INICIO CIRCULO
console.group("Circulos");
//diametro
function diametroCirculo(radio){
    return radio *2;
}
//pi
const pi = Math.PI;
//perimetro
function perimetroCirculo (radio){
 const diametro = diametroCirculo(radio);
 return diametro*pi;

}
//area
function areaCirculo(radio){
return (radio*radio)*pi;
} 
console.groupEnd();
//FIN CIRCULO


//Interaccion con el html
function calcularPerimetroCuadrado(){
    // DECLARO UNA CONSTANTE LLAMANDO AL VALOR DEL ID DEL HTML
    const input = document.getElementById("cuadrado").value;
    //DECLARO UNA FUNCION ASIGNADO EL VALOR DE UNA VARIABLE
    const perimetro = perimetroCuadrado(input);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("cuadrado").value;
    const area = areaCuadrado(input);
    alert(area);
}

//triangulo
function alturaTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;

    if(lado1 === lado2 && lado1 !=base){
        //**= ELEVADO AL /
        const altura = Math.sqrt(lado1**2 - base**2/ 4);
        alert(altura);
    }else{
        alert("No es un triangulo isósceles");
    }

}