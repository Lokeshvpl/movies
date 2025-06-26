const trending = [
 {
    name: "The Super Mario Bros. Movie",
    rating: 7.7,
    img: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
  },
 
  {
    name: "Transformers: Rise of the Beasts",
    rating: 6.9,
    img: "https://image.tmdb.org/t/p/w500/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg"
  },
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },

  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" },
  { name: "Inception", rating: 8.8, img: "https://image.tmdb.org/t/p/w342/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { name: "Interstellar", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { name: "The Dark Knight", rating: 9.0, img: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { name: "Joker", rating: 8.5, img: "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { name: "The Batman", rating: 8.0, img: "https://image.tmdb.org/t/p/w342/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { name: "Avatar: The Way of Water", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
  { name: "Parasite", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" }
  
];
const trailerLinks = {
  "The Super Mario Bros. Movie": "https://www.youtube.com/embed/TnGl01FkMMo",
  "Transformers: Rise of the Beasts": "https://www.youtube.com/embed/itnqEauWQZM",
  "Black Panther: Wakanda Forever": "https://www.youtube.com/embed/_Z3QKkl1WyM",
  "Ant-Man and the Wasp: Quantumania": "https://www.youtube.com/embed/ZlNFpri-Y40",
  "John Wick: Chapter 4": "https://www.youtube.com/embed/qEVUtrk8_B4",
  "Inception": "https://www.youtube.com/embed/YoHD9XEInc0",
  "Interstellar": "https://www.youtube.com/embed/zSWdZVtXT7E",
  "The Dark Knight": "https://www.youtube.com/embed/EXeTwQWrcwY",
  "Joker": "https://www.youtube.com/embed/zAGVQLHvwOY",
  "The Batman": "https://www.youtube.com/embed/mqqft2x_Aa4",
  "The Conjuring": "https://www.youtube.com/embed/k10ETZ41q5o",       // Official Main Trailer :contentReference[oaicite:1]{index=1}
  "The Exorcist": "https://www.youtube.com/embed/BU2eYAO31Cc",        // 4K Ultra HD Official Trailer :contentReference[oaicite:2]{index=2}
  "It": "https://www.youtube.com/embed/FnCdOQsX5kc",                  // Official Teaser Trailer :contentReference[oaicite:3]{index=3}
  "Get Out": "https://www.youtube.com/embed/DzfpyUB60YY",             // Official Trailer 1 :contentReference[oaicite:4]{index=4}
  "Parasite": "https://www.youtube.com/embed/isOGD_7hNIY",            // Official Trailer :contentReference[oaicite:5]{index=5}
  "Avatar: The Way of Water": "https://www.youtube.com/embed/d9MyW72ELq0", // Official Trailer :contentReference[oaicite:6]{index=6}
   
};


const topRated = [
{ name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" }, { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },

  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" },
  { name: "Inception", rating: 8.8, img: "https://image.tmdb.org/t/p/w342/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { name: "Interstellar", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { name: "The Dark Knight", rating: 9.0, img: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { name: "Joker", rating: 8.5, img: "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { name: "The Batman", rating: 8.0, img: "https://image.tmdb.org/t/p/w342/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { name: "Avatar: The Way of Water", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
  { name: "Parasite", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" }
];

const actionMovies = [
    {
    name: "Black Panther: Wakanda Forever",
    rating: 7.0,
    img: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
  },
  {
    name: "Ant-Man and the Wasp: Quantumania",
    rating: 6.2,
    img: "https://image.tmdb.org/t/p/w500/rXTqhpkpj6E0YilQ49PK1SSqLhm.jpg"
  },
  {
    name: "John Wick: Chapter 4",
    rating: 8.0,
    img: "https://image.tmdb.org/t/p/w500/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"
  },
   { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },

  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" },
  { name: "Inception", rating: 8.8, img: "https://image.tmdb.org/t/p/w342/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { name: "Interstellar", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { name: "The Dark Knight", rating: 9.0, img: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { name: "Joker", rating: 8.5, img: "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { name: "The Batman", rating: 8.0, img: "https://image.tmdb.org/t/p/w342/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { name: "Avatar: The Way of Water", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
  { name: "Parasite", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" }
];

const descriptions = [
  "An epic cinematic experience.",
  "Gripping story with stunning visuals.",
  "A thrilling tale of action and emotion.",
  "Dive into a world of mystery and wonder.",
  "Unforgettable characters and moments.",
  "A powerful journey through time and space."
];
function getRandomDescription() {
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

const romanticTamilMovies = [
  { name: "Inception", rating: 8.8, img: "https://image.tmdb.org/t/p/w342/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { name: "Interstellar", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { name: "The Dark Knight", rating: 9.0, img: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { name: "Joker", rating: 8.5, img: "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { name: "The Batman", rating: 8.0, img: "https://image.tmdb.org/t/p/w342/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { name: "Avatar: The Way of Water", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
  { name: "Parasite", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" }
];

const horrorTamilMovies = [
  { name: "Parasite", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" },
  { name: "Inception", rating: 8.8, img: "https://image.tmdb.org/t/p/w342/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { name: "Interstellar", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { name: "The Dark Knight", rating: 9.0, img: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { name: "Joker", rating: 8.5, img: "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { name: "The Batman", rating: 8.0, img: "https://image.tmdb.org/t/p/w342/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { name: "Avatar: The Way of Water", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
  { name: "Parasite", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" }
];

const actionTamilMovies = [
  { name: "La La Land", rating: 8.0, img: "https://image.tmdb.org/t/p/w342/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg" },
  { name: "The Notebook", rating: 7.9, img: "https://image.tmdb.org/t/p/w342/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg" },
  { name: "Titanic", rating: 7.9, img: "https://image.tmdb.org/t/p/w342/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  { name: "Inception", rating: 8.8, img: "https://image.tmdb.org/t/p/w342/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { name: "Interstellar", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { name: "The Dark Knight", rating: 9.0, img: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { name: "Joker", rating: 8.5, img: "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { name: "The Batman", rating: 8.0, img: "https://image.tmdb.org/t/p/w342/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { name: "Avatar: The Way of Water", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
  { name: "Parasite", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" }

];

const thrillerTamilMovies = [
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" },{ name: "Inception", rating: 8.8, img: "https://image.tmdb.org/t/p/w342/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { name: "Interstellar", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { name: "The Dark Knight", rating: 9.0, img: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { name: "Joker", rating: 8.5, img: "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { name: "The Batman", rating: 8.0, img: "https://image.tmdb.org/t/p/w342/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { name: "Avatar: The Way of Water", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
  { name: "Parasite", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" }
];

const dramaTamilMovies = [
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },

  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" },
  { name: "Inception", rating: 8.8, img: "https://image.tmdb.org/t/p/w342/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { name: "Interstellar", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { name: "The Dark Knight", rating: 9.0, img: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { name: "Joker", rating: 8.5, img: "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { name: "The Batman", rating: 8.0, img: "https://image.tmdb.org/t/p/w342/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { name: "Avatar: The Way of Water", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
  { name: "Parasite", rating: 8.6, img: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { name: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
  { name: "The Exorcist", rating: 8.1, img: "https://image.tmdb.org/t/p/w342/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
  { name: "It", rating: 7.2, img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
  { name: "Get Out", rating: 7.7, img: "https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" }
];

const categories = {
  "Romantic Tamil Movies": romanticTamilMovies,
  "Horror Tamil Movies": horrorTamilMovies,
  "Action Tamil Movies": actionTamilMovies,
  "Thriller Tamil Movies": thrillerTamilMovies,
  "Drama Tamil Movies": dramaTamilMovies
};

function populateRow(id, arr) {
  const row = document.getElementById(id);
  arr.forEach(item => {
    const div = document.createElement("div");
    if (typeof item === "string") {
      div.innerHTML = `<img class="poster" src="${item}" alt="">`;
    } else {
      div.innerHTML = `
        <img class="poster" src="${item.img}" alt="${item.name}">
        <div class="poster-title">${item.name} ⭐ ${item.rating}</div>
        <p class="description">${getRandomDescription()}</p>
        <button class="play-btn">▶ Play</button>
      `;
    }
    row.appendChild(div);
  });
}

// Populate sections
populateRow("trendingRow", trending);
populateRow("topRatedRow", topRated);
populateRow("actionRow", actionMovies);
populateRow("Romantic", romanticTamilMovies);
populateRow("horror", horrorTamilMovies);
populateRow("Action Tamil Movies", actionTamilMovies);
populateRow("Thriller Tamil Movies", thrillerTamilMovies);
populateRow("Drama Tamil Movies", dramaTamilMovies);
// Modal control
// Show/hide modals
function openLoginModal() {
  document.getElementById("loginModal").style.display = "flex";
}
function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("loginMessage").textContent = "";
}
function openSignupModal() {
  document.getElementById("signupModal").style.display = "flex";
}
function closeSignupModal() {
  document.getElementById("signupModal").style.display = "none";
  document.getElementById("signupMessage").textContent = "";
}

// Validation
function isValidGmail(email) {
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
}
function isNumericPassword(password) {
  return /^\d+$/.test(password);
}

// Signup
function signup() {
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!isValidGmail(username)) {
    showMessage("signupMessage", "Use valid Gmail", "red");
    return;
  }
  if (!isNumericPassword(password)) {
    showMessage("signupMessage", "Password must be numbers", "red");
    return;
  }
  if (localStorage.getItem(username)) {
    showMessage("signupMessage", "User already exists!", "orange");
    return;
  }

  localStorage.setItem(username, password);
  showMessage("signupMessage", "Signup successful!", "lime");
  setTimeout(() => {
    closeSignupModal();
    openLoginModal();
  }, 1500);
}

// Login
function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const stored = localStorage.getItem(username);
  if (stored && stored === password) {
    localStorage.setItem("userLoggedIn", "true");
    showMessage("loginMessage", "Login successful!", "lime");
    setTimeout(() => {
      closeLoginModal();
      showMainContent();
    }, 1000);
  } else {
    showMessage("loginMessage", "Invalid credentials!", "red");
  }
}

function logout() {
  localStorage.removeItem("userLoggedIn");
  document.getElementById("mainContent").style.display = "none";
  openLoginModal();
}

function showMessage(id, msg, color) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.color = color;
}

// On load
window.onload = function () {
  if (localStorage.getItem("userLoggedIn") === "true") {
    showMainContent();
  } else {
    openLoginModal();
  }
};

function showMainContent() {
  document.getElementById("mainContent").style.display = "block";
}


// Search
const all = Object.values(categories).flat();
document.getElementById("searchBox").addEventListener("input", function() {
  const q = this.value.toLowerCase();
  const rc = document.getElementById("searchResults");
  rc.innerHTML = "";
  all.forEach(m => {
    if (m.name.toLowerCase().includes(q)) {
      const d = document.createElement("div");
      d.innerHTML = `<img class="poster" src="${m.img}" alt="${m.name}">
        <div class="poster-title">${m.name} ⭐ ${m.rating}</div>
        <p class="description">${getRandomDescription()}</p>
        <button class="play-btn">▶ Play</button>`;
      rc.appendChild(d);
    }
  });
});
function populateRow(id, arr) {
  const row = document.getElementById(id);
  row.innerHTML = ""; // Clear before filling

  arr.forEach(item => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img class="poster" src="${item.img}" alt="${item.name}">
      <div class="overlay">
        <div>
          <p class="title">${item.name}</p>
          <p class="rating">⭐ ${item.rating}</p>
          <p class="description">${getRandomDescription()}</p>
        </div>
        <button class="play-btn" data-name="${item.name}">▶ Play</button>
      </div>
    `;
    row.appendChild(card);
  });
}
document.body.addEventListener("click", function(e) {
  if (e.target.classList.contains("play-btn")) {
    const name = e.target.getAttribute("data-name");
    const link = trailerLinks[name];
    if (link) {
      document.getElementById("trailerFrame").src = link + "?autoplay=1";
      document.getElementById("trailerModal").style.display = "flex";
    } else {
      alert("Trailer not available for this movie.");
    }
  }

  if (e.target.classList.contains("close-btn")) {
    document.getElementById("trailerModal").style.display = "none";
    document.getElementById("trailerFrame").src = "";
  }
});


// Theme toggle
function toggleTheme(){
  document.body.classList.toggle("light");
}
