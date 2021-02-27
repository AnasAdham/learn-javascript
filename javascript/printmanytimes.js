function printManyTimes(str){
    "user strict";

    let sentence = str + "is cool!!!";
    sentence = str + "is amazing ";

    for(var i = 0; i < str.length; i+=2 ){
        console.log(sentence);
    }

}

printManyTimes("freeCodeCamp");