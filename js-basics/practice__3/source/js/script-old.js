// 'use strict';
// /* Задание на урок:
//
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
//
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
// возвращаем пользователя к вопросам опять
//
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
//
// 4) Потренироваться и переписать цикл еще двумя способами*/
//
//
//
// // Блок вопросов. Предполагаю что вопросы будут задаваться посредством применения prompt а зафиксированы будут в массиве состоящем из вопросов.
//
// // console.log(personalMovieDB.count);
//
// //
// // const answers = [];
// // answers[0] = prompt('Сколько фильмов вы уже посмотрели?', '')
// // answers[1] = prompt('Один из последних просмотренных фильмов?', '')
// // answers[2] = prompt('На сколько оцените его?', '')
// //
// //
// // const questions = [
// //   'Сколько фильмов вы уже посмотрели?',
// //   'Один из последних просмотренных фильмов?',
// //   'На сколько оцените его?'
// // ]
//
// let oneRequest = {};
// let secondRequest = {};
// let thirdRequest = {};
//
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// let lastFilmName;
// let lastFilmLevel;
//
// let requests = [
//   oneRequest = {
//     question: 'Сколько фильмов вы уже посмотрели?',
//     answer: {},
//   },
//
//   secondRequest = {
//     question: 'Один из последних просмотренных фильмов?',
//     answer: {},
//   },
//
//   thirdRequest = {
//     question: 'На сколько оцените его?',
//     answer: {},
//   }
// ]
//
//
//
// const personalMovieDB = {
//   count : numberOfFilms,
//   movies: {
//
//   },
//   actors: {},
//   genres: [],
//   privat: false
// };
//
// // personalMovieDB.movies = `${lastFilmName}: ${lastFilmLevel}`;
//
// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', '');
//   const b = prompt('На сколько оцените его?', '');
//
//   if (a != null && b != null && a != '' && b != '' && a.length < 5 ) {
//     personalMovieDB.movies[a] = b;
//
//   } else {
//     i--;
//   }
// }
//
//
//
//
//
//
//
// //тело запросов в котором будут храниться объекты у которых будет сущность вопроса и сущность ответа.
//
//
//
// // requests[i].answer !== null
//
// // const askQuestion = function (requests) {
// //   console.log(requests[1].answer.length);
// //
// //   for (let i = 0; i < 3; i++) {
// //     requests[i].answer = prompt(requests[i].question, '');
// //     // let textLength = requests[1].answer.length;
// //     if (requests[i].answer === null || requests[i].answer === '' || requests[i].answer === false ) {
// //       askQuestion(requests)
// //       // i = 0;
// //
// //     } else if (i === 1) {
// //       // console.log('НЕ равно нулю');
// //       if (requests[1].answer.length > 5) {
// //         console.log('Наименование фильма бьльше 5 знаков');
// //         // requests[1].answer.length = null;
// //         // askQuestion(requests)
// //         // i = 1;
// //       }
// //     }
// //
// //     }
// // }
//
//
//
//
//
//
//
// const getLevelMoveViewer = function () {
//   if (personalMovieDB.count < 10) {
//     alert("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)  {
//     alert("Вы классический зритель");
//   } else if (personalMovieDB.count > 30)  {
//     alert("Вы киноман");
//   } else if (personalMovieDB.count) {
//     alert("Произошла ошибка");
//   }
// }
//
// getLevelMoveViewer();
//
//
// //
//
//
//
//
// // const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// //
// // const personalMovieDB = {
// //   count: numberOfFilms,
// //   movies: {},
// //   actors: {},
// //   genres: [],
// //   privat: false
// // };
// //
// // for (let i = 0; i < 2; i++) {
// //   const a = prompt('Один из последних просмотренных фильмов?', ''),
// //     b = prompt('На сколько оцените его?', '');
// //
// //   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// //     personalMovieDB.movies[a] = b;
// //     console.log('done');
// //   } else {
// //     console.log('error');
// //     i--;
// //   }
// // }
// //
// // if (personalMovieDB.count < 10) {
// //   console.log("Просмотрено довольно мало фильмов");
// // } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// //   console.log("Вы классический зритель");
// // } else if (personalMovieDB.count >= 30) {
// //   console.log("Вы киноман");
// // } else {
// //   console.log("Произошла ошибка");
// // }
// //
// // console.log(personalMovieDB);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
