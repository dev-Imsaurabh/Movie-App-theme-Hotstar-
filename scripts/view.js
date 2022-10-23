let movie_name = localStorage.getItem("movie_name");
getMovie(movie_name)

async function getMovie(movie_name){


    let details = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=37bd184&t=${movie_name}`);
    let data = await details.json();
    console.log(data)

    let poster = document.querySelector("#poster");
    poster.src = data.Poster
    let title = document.querySelector("#title");
    title.innerText = data.Title
    let p = document.querySelector("#plot");
    p.innerText=data.Plot


    let info = document.querySelector("#info");

    for(let x in data){
        if(x!=="Title"&&x!=="Poster"&&x!=="Ratings"&&x!=="Response"&&x!="imdbID"&&x!="Plot"){
            let p = document.createElement("p");
            p.innerHTML=`<span>${x}</span><br><br>${data[x]}`
            info.append(p)
            
            
        }


        
    }









}