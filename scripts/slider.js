let sliderData =[{
    name:"Devon Ke Dev... Mahadev",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/587/860587-h",
    desc:"He is the supreme being and the destroyer of evil. Witness lord Shiva's story, his avatars, and a union that shaped the universe - his marriage to Parvati."
},
{
    name:"IND 74/2 (13/50) vs SA 99",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/467/1380467-h-b73c1489f6d3",
    desc:"Watch live stream of the third Mastercard ODI match between India and South Africa"
},
{
    name:"Family Guy",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1628/1161628-h-1e90f4d1836c",
    desc:"NEW EPISODE EVERY MONDAY AT 10:30 AM. In a wacky Rhode Island town, buffoonish Peter Griffin and his family strive to cope with everyday life as they are thrown from one crazy scenario to another."
},
{
    name:"Hocus Pocus 2",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7341/1357341-h-3f07aa21bbf8",
    desc:"A haunting sequel to the 1993 Halloween classic featuring the delightfully wicked Sanderson sisters."
},
{
    name:"Pinocchio",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8527/1338527-h-d4f52e91ab72",
    desc:"A live action retelling of the beloved tale of a wooden puppet who embarks on a thrilling adventure to become a real boy."
},];




inflateSlider(sliderData)

function inflateSlider(sliderData){

    sliderData.forEach((el,index) => {

        let div = document.createElement("div");
        let details = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.innerText=el.name
        let p = document.createElement("p");
        p.innerText=el.desc
        let imgDiv = document.createElement("div");

        let image=document.createElement("img")
        image.src=el.image

        details.append(h2,p)
        imgDiv.append(image)
        div.append(details,imgDiv);

        let slider = document.querySelector("#slider");
        slider.append(div)

        
    });

    
}

let i =0;
let flag =0

setInterval(function(){
    
    if(i==4){
        flag =1

    }
    if(i==0){
        flag=0

    }
    if(flag==1){
      let slider=  document.querySelector("#slider").scrollBy(-1450,0)
        
        i--

    }else{
      let slider=  document.querySelector("#slider").scrollBy(1450,0)
        i++
    }


},4000)
