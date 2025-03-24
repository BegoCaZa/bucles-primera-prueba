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
        // console.log(price);
        
        totalPrice=totalPrice + price;
    }
    console.log("Precio Total: "+ totalPrice);
}
priceAddition([23,78,45])

//3️⃣ Macarena quiere generar tres códigos de seguridad y almacenarlos en un array. Cada código debe ser un número aleatorio entre 1000 y 9999. Usa un bucle for para generar los códigos y luego mostrarlos.
//Ejemplo salida: [4356, 7890, 1234]

const aleatoryCodeGenerator=(emptyArray)=>{
    
    for (let i= 0; i<3; i++) { //considerar que cuenta 0,1,2....llega al 3 y para
        const aleatoryNumber=Math.floor(Math.random()*(9999-1000)+1000);
        emptyArray.push(aleatoryNumber); //no puedo usar + por que es un array, debo push o pop
    }
    console.log(emptyArray);

}
aleatoryCodeGenerator([]);

//4️⃣ Abby encontró una lista de suministros en un refugio: ['Agua', 'Munición', 'Botiquín', 'Czst']. Debe comprobar si todos los elementos contienen al menos una vocal.
// Ejemplo salida:
// Agua contiene vocales.
// Munición contiene vocales.
// Botiquín contiene vocales.
// Czst no contiene vocales.

const checkProvisionList =(supplies)=>{
    const vowels="AEIOU"
    for (const supplie of supplies) {
        for(const letter of supplie){
        if (vowels.includes(letter.toUpperCase())){
            console.log(`${supplie} contiene vocales`);
            break
        }else{
            console.log(`${supplie} no contiene vocales`);
            
        }
        }
    }
    }

checkProvisionList(['Agua', 'Munición', 'Botiquín', 'Czst']);

//5️⃣ Bego está calculando precios con descuento. Tiene un array con precios, (por ejemplo [150, 300, 50]). Si el precio es mayor a 100, aplica un 20% de descuento, si no, un 10%. Usa un bucle para mostrar cada precio original, descuento aplicado y precio final.
// Ejemplo salida:
// Precio original: 150 - Descuento aplicado: 30 - Precio final: 120
// Precio original: 300 - Descuento aplicado: 60 - Precio final: 240
// Precio original: 50 - Descuento aplicado: 5 - Precio final: 45

const applyDiscount=(prices)=>{

    for (const price of prices) {
        if (price>=100){
            const discount=price*.20;
            const finalPrice=price-discount;
            console.log(`Precio original ${price}. | Descuento aplicado ${discount}. | Precio final: ${finalPrice}.`);
        } else {
            const discount=price*.10;
            const finalPrice=price-discount;
            console.log(`Precio original ${price}. | Descuento aplicado ${discount}. | Precio final: ${finalPrice}.`);
        }   
    }
} //omgggggggggg funcionoooooo :))))) creo
applyDiscount([150, 300, 50]);

//7️⃣ Sabrina quiere verificar cuántos números aleatorios generados entre 1 y 100 son múltiplos de 3. Haz una función que haga esta comprobación con 10 números.
// Ejemplo salida:
// Números generados: [12, 35, 75, 9, 27, 4, 6, 88, 15, 3]
// Múltiplos de 3 encontrados: 7

const verifyAleatoryNumbers=(emptyArray)=>{

    let multiplyToTheThird=0;

    for (let i= 0; i<=9; i++) {
        const aleatoryNumber=Math.floor(Math.random()*100);
        emptyArray.push(aleatoryNumber);
        if (aleatoryNumber%3===0){
            multiplyToTheThird++;
}
    }

    console.log(emptyArray);
    console.log("Múltiplos de 3 encontrados= "+multiplyToTheThird);   
    }
  
     //omgggggggggg funcionoooooo :))))) creo, solo no se si podian ser anidados
verifyAleatoryNumbers([]);

// 8️⃣ Macarena tiene un array con tres nombres y debe crear un array nuevo con las iniciales de cada nombre en mayúsculas usando un bucle.
// Ejemplo entrada: ['Pedro', 'Ana', 'Luis']
// Ejemplo salida: ['P', 'A', 'L']

const getCapLetters= (names)=>{
    const initials=[]; //como empty array pero nombrado
    for (const name of names) {
        initials.push(name.charAt(0));
        //guardar estas iniciales en una variable
    }
    console.log(initials);
}
getCapLetters(['Pedro', 'Ana', 'Luis']);

//9️⃣ Abby está revisando mensajes cifrados. Tiene un array con palabras (cantidad y palabras a tu elección) que deben invertirse y mostrarse en minúsculas. Usa un bucle para procesarlas todas. Investiga sobre las funciones split(), reverse() y join()
// Ejemplo entrada: ['FUEGO', 'REFUGIO', 'SUMINISTROS']
// Ejemplo salida: ['oguef', 'oiguref', 'sotsinimus']

const wordReverse=(words)=>{

    for (const word of words) { //por cada word de mi lista
        const separatedWord= word.split('');
        console.log(separatedWord.reverse());
    }

} //buuu no funcionó...me frustre y la salte
wordReverse(['FUEGO', 'REFUGIO', 'SUMINISTROS'])

//🔟 Camila quiere generar un código de acceso combinando letras aleatorias y números. Usa un bucle para crear un string aleatorio de 6 caracteres sacados de 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.
// Ejemplo salida: 'A3P9K8'

// const accessCodeGenerator=()=>{
//     const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(); //separo todas las letras del array
    
// //necesito que tenga un indice random para sacar esa ubicacion de las letras
//     for (let i= 0; i<6; i++) { 
//         const randomIndex=Math.floor(Math.random()*(36-1)+1);//son 36 characters
//         const randomCode=characters.charAt(randomIndex);
//          }
//          console.log(randomCode);

//     } //buuu me atoré
// accessCodeGenerator();


//1️⃣1️⃣ Macarena quiere crear un sistema que genere combinaciones de nombres y apellidos. Tiene dos arrays: ['Juan', 'Ana', 'Luis'] y ['Pérez', 'Martínez', 'García']. Debe generar todos los nombres posibles combinando uno de cada array.
// Ejemplo salida:
// Juan Pérez
// Juan Martínez
// Juan García
// Ana Pérez
// Ana Martínez
// Ana García
// Luis Pérez
// Luis Martínez
// Luis García

const nameGenerator=()=>{
    const names=['Juan', 'Ana', 'Luis'];
    const surnames=['Pérez', 'Martínez', 'García'];

   for (const name of names) {
     for (const surname of surnames) {
        console.log(name +' '+surname);
     }     
     }
   }
   nameGenerator();

   //1️⃣2️⃣ Abby quiere comprobar si al menos uno de los números generados aleatoriamente entre 1 y 100 es divisible por 5. Genera 5 números y muestra si se cumple la condición.
// Ejemplo salida:
// Números generados: [23, 45, 67, 12, 90]
// Números divisibles por 5 encontrados: [45, 90]

const isThisNumberDivBy5=(emptyArray)=>{
    let dividableByFive=0;
    for (let i= 0; i<5; i++) {
        const aleatoryNumber=Math.floor(Math.random()*100);
        emptyArray.push(aleatoryNumber);
        if (aleatoryNumber%5===0){
            dividableByFive++;
    }

}
    
    console.log(emptyArray);
    console.log("Número dividibles por 5= "+dividableByFive);
        
    } 
    isThisNumberDivBy5([]);


    //1️⃣3️⃣ Camila tiene un array con nombres y quiere mostrar sólo aquellos que tienen más de 4 letras.
// Ejemplo entrada: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']
// Ejemplo salida: ['Pedro', 'Elena', 'Sofía']

const doesThisNameHas4Letters =(names)=>{

    for (const name of names) {
        if (name.length>4){
            console.log(name);
        }  
    }
}
doesThisNameHas4Letters(['Pedro', 'Joaquin', 'paco', 'Elna', 'Sofía']);

//1️⃣4️⃣ Bego tiene un array con tres palabras y quiere mostrar todas las combinaciones posibles de esas palabras usando dos palabras a la vez y cuyas combinaciones no repitan la palabra.
// Ejemplo entrada: ['Sol', 'Luna', 'Estrella']
// Ejemplo salida:
// Sol Luna
// Sol Estrella
// Luna Sol
// Luna Estrella
// Estrella Sol
// Estrella Luna

const wordCombination=()=>{
    const wordList=['Sol', 'Luna', 'Estrella']; 
    for (let i = 0;  i<wordList.length; i++) {
        console.log(wordList.shift());
        
    }
} //me trabe
wordCombination([]);

//1️⃣5️⃣ Sabrina quiere generar un nombre de usuario aleatorio combinando una consonante, una vocal y un número aleatorio entre 1 y 99. Debe hacerlo 5 veces y mostrar los resultados.
// Ejemplo salida: ['MA87', 'RO56', 'LE23', 'FI99', 'PU12']

// const userNameGenerator=(emptyArray)=>{
//     const vowels="AEIOU";
//     const consonants="BCDFGHJKLMNÑPQRSTVXZWY";
//     const numbers=Math.floor(Math.random()*99);

//     for (let i = 0; i < 5; index++) {
//         for (let j= 0; j< vowels.length; j++) {
//             const element = array;
            
//         }
        
        
//     }
// }
// userNameGenerator();

