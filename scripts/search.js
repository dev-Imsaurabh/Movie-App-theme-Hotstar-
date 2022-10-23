import appendSearchData from "../components/append_data.js";

let loader = document.querySelector("#loader");

document.querySelector("#login").addEventListener("click", function () {
  let inputValue = document.querySelector("#search").value;

  if (inputValue != "") {
    let mainDiv = document.querySelector("#search-Div>div");
    mainDiv.innerHTML = "";
    performSearch(); //this function i have called in /search.js
  }
});

try {
  document
    .querySelector("#search")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        let inputValue = document.querySelector("#search").value;
        if (inputValue != "") {
          let mainDiv = document.querySelector("#search-Div>div");
          mainDiv.innerHTML = "";
          performSearch(); //this function i have called in /search.js
        }
      }
    });
} catch (error) {}

async function performSearch() {
  loader.style.display = "block";
  let movie_name = document.querySelector("#search");

  let name = movie_name.value;
  let data = await makeSearch(name);
  try {
    if (data.Response != "False") {
      loader.style.display = "none";
      document.querySelector("#results").innerText =
        "Found " + data.Search.length + " matching results :";
      appendSearchData(data.Search, "#searchDiv");
    } else {
      loader.style.display = "none";
      alert(data.Error);
    }
  } catch (error) {}
}

async function makeSearch(name) {
  let data;
  try {
    let chunks = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=37bd184&s=${name}`
    );
    data = await chunks.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error);
    loader.style.display = "none";
  }
}

setTimeout(() => {
  document.querySelector("#search").addEventListener("input", function () {
    debouncing(searchSuggestion, 500);
  });
}, 1000);

let id;
function debouncing(func, delay) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
}

async function searchSuggestion() {
  let search = document.querySelector("#search").value;
  let data = await makeSearch(search);
  if (data.Response == "True") {
    appendSeachSuggestion(data.Search);
  }
}

async function appendSeachSuggestion(data) {
  let mainDiv = document.querySelector("#search-Div>div");
  mainDiv.innerHTML = "";
  data.forEach(function (el, index) {
    let card = document.createElement("div");
    let imgDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.Poster;
    imgDiv.append(image);

    let title = document.createElement("h3");
    title.innerText = el.Title;
    card.append(imgDiv, title);
    mainDiv.append(card);
    card.addEventListener("click", function () {
      let mainDiv = document.querySelector("#search-Div>div");
      mainDiv.innerHTML = "";
      localStorage.setItem("movie_name", el.Title);
      window.location.href = "../view.html";
    });
  });
}
