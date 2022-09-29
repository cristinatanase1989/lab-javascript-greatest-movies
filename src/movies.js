// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map((i) => i.director);
    
    
    const eliminarDuplicados = directorsArray.filter((valor, indice) => {
        return directorsArray.indexOf(valor) === indice;

    })
    return eliminarDuplicados

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesStevenS = moviesArray.filter((movie) => {
        // console.log(movie)
         if(movie.director == `Steven Spielberg` && movie.genre.includes(`Drama`)) return true
         else return false
    })
 
    /*otra manera de rezolver el ejercitio 
    const steven = moviesArray.filter(pelicula => pelicula.director === `Steven Spielberg`);
     const drama = steven.filter(pelicula => pelicula.genre.includes(`Drama));
     return drama.lenght
         
    */
         return moviesStevenS.length
 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      } else {
        let result = moviesArray.reduce((currentValue, previousValue) => {
          if (!previousValue.score) {
            return currentValue;
          } else {
            return currentValue + previousValue.score;
          }
        }, 0);
        return parseFloat((result / moviesArray.length).toFixed(2));
    }   

    

       /* if(scores.length == 0)
        return 0;

        let averageScore = scores.reduce((a,b) =>{ a + b 
            console.log(averageScore)
        })

let average = averageScore / scores.length;

        console.log(average)
        return parseFloat(average.toFixed(2))

  console.log(scoresAvarage(moviesArray))    */  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesAvg = moviesArray.filter((movie) => movie.genre.includes(`Drama`));

    return scoresAverage(dramaMoviesAvg)
   
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let anual = Array.from(moviesArray);
anual.sort((a,b) =>
{
    if(a.year>b.year) return 1;
    if(a.year<b.year) return -1;
    if(a.year === b.year) {
        if(a.title>b.title) return 1;
        if(a.title<b.title) return -1;
    }
})
return anual;
}
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0)
    return 0
    let scoreMovie = []
    for (let index = 0; index < moviesArray.length; index++) {
        let score = moviesArray[index].score;
        if ( !score ) {
            score = 0;
        }
        scoreMovie.push(score);
    }
    let sum = 0
    for (let index = 0; index < scoreMovie.length; index++) {
        sum = (sum + scoreMovie[index]);
    }
    let promedio = sum/scoreMovie.length;
    return parseFloat(promedio.toFixed(2));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
