"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",0);
const personalMovieDB = {
   count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

}
console.log(personalMovieDB);
const lastFilm = prompt("Один из последних просмотренных фильмов?","название"),
      evaluateFilm = +prompt("На сколько оцените его?",0),
      lastFilm1 = prompt("Один из последних просмотренных фильмов?","название"),
      evaluateFilm1 = +prompt("На сколько оцените его?",0);

    personalMovieDB.movies[lastFilm] = evaluateFilm;
    personalMovieDB.movies[lastFilm1] = evaluateFilm1;
console.log(personalMovieDB);


