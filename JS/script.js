"use strict"; 

function first() {
    // Do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

/* const str = "teSt";
const arr = [1, 2, 4];

/* console.log(str[2] = 'd'); */

//console.log(str.toUpperCase());
/* console.log(str.toLowerCase());
console.log(str);
 */
/* const fruit  = "Some fruit";

console.log(fruit.indexOf("q")); */


/* const logg = "Hello world"; */

/* console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11)); */

/* console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2 px";
console.log(parseInt(test));
console.log(parseFloat(test));  */

 //const numberOfFilms = +prompt('Сколько фильмов вы уже просмотретли?', '');

/* let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else{
            console.log('error');
            i--;
        }   
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

//detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номером ${i}`, '');
        //if(questGenres != null && questGenres != '') {

        //}
    }
}

writeYourGenres(); */

//console.log(personalMovieDB);

/* let num = 20;

function showFirstMessage(text) {
     console.log(text);
     console.log(num);
}

showFirstMessage("Hello World!");
console.log(num); 

/* console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function calc (a, b) {
    return (a + b);
} */


/* function ret() {
    let num = 50;


    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
     console.log("Hello")
};

logger();

const calc = (a, b) => {
    console.log('1'); 
    return a + b 
    }; */