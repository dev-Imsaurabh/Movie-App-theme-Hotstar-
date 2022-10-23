
function appendSearchData(data,id) {
    let searchDiv = document.querySelector(`${id}`);
    searchDiv.innerHTML=""
  data.forEach(function (el, index) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.Poster;
    let title = document.createElement("h3");
    title.innerText=el.Title

    let type = document.createElement("h4");
    type.innerText=el.Type

    let year =document.createElement("h5");
    year.innerText=el.Year

    div.addEventListener("click",function(){
        localStorage.setItem("movie_name",el.Title)
        window.location.href="../view.html"
    })

    div.append(image,title,type,year)
    searchDiv.append(div)

    


});
}

export default appendSearchData