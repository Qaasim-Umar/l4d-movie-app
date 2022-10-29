// //created an async function to fetch the datas
// const darkMode = document.querySelector('.dark');
const getMovies = async () => {
  const response = await fetch(
    "https://yts.mx/api/v2/list_movies.json?quality=3D"
  );
  const data = await response.json();
  const result = await data.data.movies;
  return result;
};

const caller = async () => {
  let arr = await getMovies();

  let data1 = "";
  arr.map((item) => {
    data1 += `
    <div class="movie-pic">
    <div class ="grid-items">
    <a href="movie.html?id=${item.id}">
        <img src="${item.medium_cover_image}" alt="">
    </a>
    <div class="details">
        <p class="hd-text">  <a href="movie.html?id=${item.id}"> ${item.title} </a></p>
        <p class="text">${item.year}</p>
        </div>
</div>
</div>
`;
  });
  document.querySelector(".container").innerHTML = data1;
};
caller();



