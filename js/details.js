const getMovies = async () => {
  const response = await fetch(
    "https://yts.mx/api/v2/list_movies.json?quality=3D"
  );
  const data = await response.json();
  const result = await data.data.movies;
  return result;
};

const populateMovieDetails = async () => {
  let movies = await getMovies();
  let queryString = window.location.search;
  let parameters = new URLSearchParams(queryString);
  let movieId = parameters.get("id");
  console.log(movieId);

  let movie = movies.find((item) => {
    return item.id == movieId;
  });
  console.log(movie);

  if (movieId) {
    var data = `
<div class="wh-container">
<div class="imge">
    <img src="${movie.medium_cover_image}" alt="">
    <button><a href="https://www.youtube.com/embed/${
      movie.yt_trailer_code
    }?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3">Watch Trailer now</a></button>
    <button class="second-button"><a href="${
      movie.torrents[0].url
    }">Download torrent file</a></button>
    </div>
<div class="grp-container">
    <p class="heading">${movie.title}</p>
    <p class="year">${movie.year}</p>
    <p class="genre">${movie.genres.join(" / ")}</p>
    <p class="para">${movie.summary}</p>
    </div>
</div>
`;
    document.querySelector(".movieDetails").innerHTML = data;
  }
};
populateMovieDetails();
