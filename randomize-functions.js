function getRandomArbitary(min, max) // from http://javascript.ru
{
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) // from http://javascript.ru
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//

function randomElement(array) {
    return(array[getRandomInt(0,array.length-1)]);
}

function randomRGBColor(array) {
    return("RGB(" + getRandomInt(0,255) + "," + getRandomInt(0,255) + "," + getRandomInt(0,255) + ")");
}

function randomRGBaColor(array) {
    return("RGBa(" + getRandomInt(0,255) + "," + getRandomInt(0,255) + "," + getRandomInt(0,255) + "," + getRandomArbitary(0,1) + ")");
}

console.log(randomRGBColor())