const apikey = "e03d2572";
const keyword = document.getElementById("keyword");
const getMovie = document.getElementById("search-form");

const label = document.getElementById("label");
const exploreIcon = document.getElementById("explore-icon");
const moviesContainer = document.getElementById("movies");
const watchlistContainer = document.getElementById("watchlist");

keyword.placeholder = "Search for a movie";

function getWatchlist() {
  return JSON.parse(localStorage.getItem("watchlist")) || [];
}

function saveWatchlist(list) {
  localStorage.setItem("watchlist", JSON.stringify(list));
}

// Create Movie Card
function createMovieElement(movie, isWatchlist = false) {
  const movieSection = document.createElement("section");
  movieSection.className = "movie flex";

  const movieInfoWrap = document.createElement("div");

  // Movie Title
  const movieTitle = document.createElement("div");
  movieTitle.className = "movie-title flex";

  const title = document.createElement("h2");
  title.textContent = movie.Title;

  const starImg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  starImg.setAttribute("width", "13");
  starImg.setAttribute("height", "12");
  starImg.setAttribute("viewBox", "0 0 13 12");
  starImg.innerHTML = `<path d="M5.78671 1.19529C6.01122 0.504306 6.98878 0.504305 7.21329 1.19529L8.01547 3.66413C8.11588 3.97315 8.40384 4.18237 8.72876 4.18237H11.3247C12.0512 4.18237 12.3533 5.11208 11.7655 5.53913L9.66537 7.06497C9.40251 7.25595 9.29251 7.59447 9.39292 7.90349L10.1951 10.3723C10.4196 11.0633 9.62875 11.6379 9.04097 11.2109L6.94084 9.68503C6.67797 9.49405 6.32203 9.49405 6.05916 9.68503L3.95903 11.2109C3.37125 11.6379 2.58039 11.0633 2.8049 10.3723L3.60708 7.90349C3.70749 7.59448 3.59749 7.25595 3.33463 7.06497L1.2345 5.53914C0.646715 5.11208 0.948796 4.18237 1.67534 4.18237H4.27124C4.59616 4.18237 4.88412 3.97315 4.98453 3.66414L5.78671 1.19529Z" fill="#FEC654" />`;

  const rating = document.createElement("span");
  rating.textContent = movie.imdbRating || "N/A";

  const ratingWrap = document.createElement("div");
  ratingWrap.className = "flex";
  ratingWrap.append(starImg, rating);
  movieTitle.append(title, ratingWrap);

  // Movie Info
  const movieInfo = document.createElement("div");
  movieInfo.className = "movie-info flex";

  const time = document.createElement("p");
  time.textContent = movie.Runtime || "N/A";

  const info = document.createElement("p");
  info.textContent = movie.Genre || "N/A";

  // --- Watchlist Button ---
  const button = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  button.setAttribute("width", "16");
  button.setAttribute("height", "16");
  button.setAttribute("viewBox", "0 0 16 16");
  button.setAttribute("fill", "none");

  const btnWrap = document.createElement("div");
  btnWrap.className = "flex";

  if (!isWatchlist) {
    // Add button
    button.innerHTML = `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z" fill="white"/>`;
    const watchlistEl = document.createElement("span");
    watchlistEl.textContent = "Watchlist";
    btnWrap.append(button, watchlistEl);

    btnWrap.addEventListener("click", () => {
      alert("Hello");
    });
  } else {
    // Remove button (minus icon)
    button.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H11C11.5523 9 12 8.55229 12 8C12 7.44772 11.5523 7 11 7H5Z"
                                    fill="white" />`;
    const removeEl = document.createElement("span");
    removeEl.textContent = "Remove";
    btnWrap.append(button, removeEl);

    btnWrap.addEventListener("click", () => {
      alert("Hi");
    });
  }

  movieInfo.append(time, info, btnWrap);

  // Movie Description
  const movieDescription = document.createElement("p");
  movieDescription.className = "movie-description";
  movieDescription.textContent =
    movie.Plot !== "N/A" ? movie.Plot : "No description available.";

  const descriptionLink = document.createElement("a");
  descriptionLink.href = `https://www.imdb.com/title/${movie.imdbID}/`;
  descriptionLink.target = "_blank";
  descriptionLink.textContent = " Read more";
  movieDescription.appendChild(descriptionLink);

  movieInfoWrap.append(movieTitle, movieInfo, movieDescription);

  // Movie Poster
  const movieImg = document.createElement("img");
  movieImg.className = "movie-img";
  movieImg.src = movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg";
  movieImg.alt = movie.Title;

  movieSection.append(movieInfoWrap, movieImg);
  return movieSection;
}
getMovie.addEventListener("submit", async function (e) {
  e.preventDefault();

  const searchTerm = keyword.value.trim();
  const movieBaseUrl = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apikey}`;

  try {
    const res = await fetch(movieBaseUrl);
    if (!res.ok) throw new Error(res.status);

    const data = await res.json();

    moviesContainer.innerHTML = "";
    if (data.Response === "True") {
      for (const movie of data.Search) {
        const detailsRes = await fetch(
          `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apikey}`
        );
        const movieDetails = await detailsRes.json();
        const movieEl = createMovieElement(movieDetails);
        moviesContainer.appendChild(movieEl);
      }
    } else {
      keyword.placeholder = "Searching something with no data";
      exploreIcon.style.display = "none";
      label.textContent =
        "Unable to find what you’re looking for. Please try another search.";
    }
  } catch (err) {
    console.error("Error fetching movies:", err);
    exploreIcon.style.display = "none";
    label.style.color = "red";
    label.textContent = "Error loading movies.";
  }

  // reset input field
  keyword.value = "";
  //   keyword.placeholder = "Search for a movie";
});
