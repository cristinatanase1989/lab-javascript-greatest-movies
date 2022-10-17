//const movies = require("./data");

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


        scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(moviesArray) {
	const dramamovies = moviesArray.filter((movie) => {
		return movie.genre.includes("Drama");
	});
	if (dramamovies.length === 0) {
		return 0;
	} else {
		let result = dramamovies.reduce((currentValue, previousValue) => {
			if (!previousValue.score) {
				return currentValue;
			} else {
				return currentValue + previousValue.score;
			}
		}, 0);
		return parseFloat((result / dramamovies.length).toFixed(2));
	}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	let newArray = [...moviesArray];
	newArray.sort((a, b) => {
		if (a.year === b.year) {
			return a.title > b.title ? 1 : -1;
		} else {
			return a.year > b.year ? 1 : -1;
		}
	});
	return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) {
//              //duplicamos el array y lo partimos
//     const newArrayAlph = moviesArray.slice();
//             //selectionamos solo los titulos por orden alfabetico
//             moviesTitle.sort((a,b)=>{
//                 if(a === b)return 0;
//                 if(a > b) return 1;
//                 if(a<b) return -1;

//                 return 0;
//             }
//             )

//             // cortamos el array en los 20 primeros elementos
//             const slicedArray = moviesTitle.slice(0 , 20);
//             return slicedArray;


function orderAlphabetically(moviesArray) {
	let newArray = [...moviesArray];
	newArray.sort((a, b) => {
		return a.title === b.title ? 0 : a.title > b.title ? 1 : -1;
	});
	let titles = newArray.map((movie) => {
		return movie.title;
	});
	return titles.slice(0, 20);
}

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
}

