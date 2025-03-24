// const values=[6,3,4,6,7,8,7,8];

// const printFirst0Numbers=()=>{
//     for (let i=values.length; i>=0;i--){ //mientras el contador, sea menor que el largo del array
//         console.log(values[i]);
//         }
// }
// printFirst0Numbers();

// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
    
// // }

//1️⃣ Camila está revisando una lista de nombres, (por ejemplo: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']). Debe imprimir cada nombre en mayúsculas, uno por línea.

const printListNames=(names)=>{
    for (let i = 0; i < names.length; i++) {
        
        console.log(names[i].toUpperCase());
        
    }

}
    
printListNames(['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']);

//2️⃣ Bego tiene un array con precios. Debe sumar todos los precios usando un bucle for y mostrar el total.
//Ejemplo entrada: [23, 78, 45]
//Ejemplo salida: Total: 146

const priceAddition=(prices)=>{
    let totalPrice=0;
    for (const price of prices) {
        console.log(price);
        
        totalPrice=totalPrice + price;
    }
    console.log(totalPrice);
}
priceAddition([23,78,45])

//3️⃣ Macarena quiere generar tres códigos de seguridad y almacenarlos en un array. Cada código debe ser un número aleatorio entre 1000 y 9999. Usa un bucle for para generar los códigos y luego mostrarlos.
//Ejemplo salida: [4356, 7890, 1234]

const aleatoryCodeGenerator=(emptyArray)=>{
    
    for (let i= 0; i<3; i++) {
        const aleatoryNumber=Math.floor(Math.random()*(9999-1000)+1000);
        emptyArray.push(aleatoryNumber); //no puedo usar + por que es un array, debo push o pop
    }
    console.log(emptyArray);

}
aleatoryCodeGenerator([]);