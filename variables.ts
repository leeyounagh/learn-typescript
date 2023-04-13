// String Variable With Explicit Annotation
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";

movieTitle.toUpperCase();

// Number Variable with explicit annotation
let numCatLives: number = 9;
numCatLives += 1;

// Explicitly typed boolean variable:
let gameOver: boolean = false;
gameOver = true;

// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";

let isFunny = false;
isFunny = true;

// the any type
let thing: any = "hello"; //This is not a great idea!
thing = 1;
thing = false;
thing();
thing.toUpperCase();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}
