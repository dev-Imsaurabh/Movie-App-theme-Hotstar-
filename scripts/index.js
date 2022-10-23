

let movies=[{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4310/674310-v",
    ratings:5,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5537/675537-v",
    ratings:1,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5440/675440-v",
    ratings:3,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4364/674364-v",
    ratings:3,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5229/875229-v",
    ratings:4,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5533/675533-v",
    ratings:4,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7975/1317975-v-946cae85a242",
    ratings:4,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5223/875223-v",
    ratings:3,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4335/674335-v",
    ratings:4,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5434/675434-v",
    ratings:5,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6407/1366407-v-79ac9f6e4661",
    ratings:4,
},
{
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8311/1328311-v-abc8a4c662e4",
    ratings:2,
},

];


// inflateMovies(movies)

function inflateMovies(movies){
    document.querySelector("#movies").innerHTML=""
    movies.forEach((el) => {

        let div = document.createElement("div");
        let h4= document.createElement("h4");
        let star=""
        for(let j =0; j<el.ratings;j++){
            star+="⭐"+" "
        }

        h4.innerText=star;

        let image=document.createElement("img")
        image.src=el.image
        div.append(image,h4);

        let box = document.querySelector("#movies");

            box.append(div)

        
    });

    
}

document.querySelector("#sortby").addEventListener("change",function(){

    let selected = document.querySelector("#sortby").value
    let x;
    if(selected=="asc"){
    x = movies.sort((a,b)=>a.ratings-b.ratings)
    }else{
        x = movies.sort((a,b)=>b.ratings-a.ratings)

    }

    inflateMovies(x)


})

document.querySelector("#sortbyratings").addEventListener("change",function(){

    let selected = document.querySelector("#sortbyratings").value
    let x=movies.filter(function(el){

            if(el.ratings==selected){
                return  el

            }

    
        })

        inflateMovies(x)

})



let getServer = new Promise(function(resolve,reject){



    setTimeout(() => {
        let data = movies

        if(data!==null){
            resolve(data)
        }else{
            reject("Error: Unable to get data from server");
        }
        
    }, 1500);



})


getServer.then(function(success){

    inflateMovies(success)
    document.querySelector("#loader").style.display="none";

}).catch(function(error){

    console.log("error")

})






