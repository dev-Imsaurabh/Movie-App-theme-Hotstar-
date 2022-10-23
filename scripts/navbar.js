
import nav from "../components/nav.js";
import search_nav from "../components/nav_search.js";

let path = window.location.pathname;

let page = path.split("/").pop();

if(page!="search.html"){
let bar = nav()
document.querySelector("#navbar").innerHTML=bar

}else{

let bar =search_nav()
document.querySelector("#navbar").innerHTML=bar

}

document.querySelector("#login").addEventListener("click",function(){
    
    if(page!="search.html"){
        window.location.href="../Login/login.html"

    }
})

document.querySelector("#logo").addEventListener("click",function(){
   
        window.location.href="../index.html"

   
    
})

document.querySelector("#search").addEventListener("click",function(event){

    if(page!="search.html"){
        window.location.href="../search.html"

    }

})



