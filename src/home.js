  "use strict"

  const  h = [
            {el: "p", text: "We offer you the most delicious Levantine cuisine cooked by the most skilled local chefs."},
            {el: "p", text: "Order online Or Contact Us.", css: ["marginTop", "5vw"] },
            {el: "img" },
            ];

    let     cont = document.getElementById("content"),
            // imgH = "../dist/img/Mashawi.jpg",
            imgH = "../src/img/Mashawi.jpg",
            homeP = document.createElement("div"),
            homeImg = document.createElement("div");
            homeP.classList.add('home-p');


    export  default function  Home(){
     document.body.classList.add('home');
            h.map( (h)=>{
                let create = document.createElement(`${h.el}`);
                h.text
                  ? (() => {
                      (create.textContent = h.text), console.log("p");
                      h.css
                        ? (() => {
                            create.style.marginTop = `${h.css[1]}`;
                            console.log("css");
                          })()
                        : console.log("css Not found");
                      homeP.appendChild(create);
                    })()
                  : (h.el = "img"
                      ? (() => {
                          console.log("img");
                          create.setAttribute("src", `${imgH}`),
                            create.setAttribute("alt", "image-Home");
                          create.classList.add("home-img");
                          homeImg.appendChild(create);
                        })()
                      : console.log("img not found"));
                cont.appendChild(homeP);
                cont.appendChild(homeImg);
              })
    };  
 
  

