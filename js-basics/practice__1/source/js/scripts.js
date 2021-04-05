/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';


// Блок вопросов. Предполагаю что вопросы будут задаваться посредством применения prompt а зафиксированы будут в массиве состоящем из вопросов.

// console.log(personalMovieDB.count);

const answers = [];
answers[1] = prompt('Сколько фильмов вы уже посмотрели?', '')
answers[2] = prompt('Один из последних просмотренных фильмов?', '')
answers[3] = prompt('На сколько оцените его?', '')

const numberOfFilms = answers[1];
let lastFilmName = answers[2];
let lastFilmLevel = answers[3];

let personalMovieDB = {
  count : numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let movies = {
  lastFilmName: lastFilmLevel
};

console.log(personalMovieDB.count);
console.log(movies);













































