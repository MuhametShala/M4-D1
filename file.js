//? ESERCIZIO 1

/* function numberControl(numeroUno, numeroDue){
    if (numeroUno===50 || numeroDue===50 || (numeroUno+numeroDue)===50){
        console.log("true");
    }

    else {
        console.log("false")
    }
    
}

numberControl(13,36); */

//? ESERCIZIO 2

//!QUESTO MANCA


//? ESERCIZIO 3

/*function controlNumber (n1, n2) {
    if ((n1 >= 40 && n1 <= 60 || n1 >= 70 && n1 <= 100) &&
        (n2 >= 40 && n2 <= 60 || n2 >= 70 && n2 <= 100)) {
         console.log(true);
    } 
    else {
        console.log(false);
    }
}
controlNumber(40,40)*/

//? ESERCIZIO 4

/* function controlCity (cityName) {
    let lowerCityName = cityName.toLowerCase();
    if (lowerCityName.startsWith("new") || lowerCityName.startsWith("los")) {
         console.log(cityName);
      } else {
        console.log(false);
      }

}

controlCity('Angeles') */

//? ESERCIZIO 5

/* let array1 = [1, 2, 3, 4, 5];

function arraySum (array) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
    }
    return sum;
}
let result = arraySum(array1);
console.log(result); */

//? ESERCIZIO 6

/* let array1 = [6, 2, 10, 4, 5];

function controlArrayNumber (array) {
    if (!array.includes(1) && !array.includes(3)) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

controlArrayNumber (array1); */

//? ESERCIZIO 7

/* function findAngleType(degrees) {
    if (degrees < 90) {
      return "Angolo acuto";
    }
     else if (degrees === 90) {
      return "Angolo retto";
    } 
    else if (degrees < 180 && degrees > 90) {
      return "Angolo ottuso";
    } 
    else if (degrees === 180) {
      return "Angolo piatto";
    } 
    else {
      return "Angolo concavo";
    }
  }

let angle1 = 45;
let angle2 = 90;
let angle3 = 140;
let angle4 = 180;
let angle5 = 300;

console.log(findAngleType(angle1)); 
console.log(findAngleType(angle2));
console.log(findAngleType(angle3)); 
console.log(findAngleType(angle4)); 
console.log(findAngleType(angle5)); */

//? ESERCIZIO 8

/*function createAcronym(frase) {
    var words = frase.split(" "); //? Divide la frase in un array di parole
    var acronym = "";
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      acronym += word[0].toUpperCase(); //? Aggiunge la lettera iniziale della parola all'acronimo in maiuscolo
    }
  
    return acronym;
  }

let frase1 = "Fabbrica Italiana Automobili Torino"

console.log(createAcronym(frase1)); */


