  "use strict"

let c = [   // It should be organized according to the sequence in the entry
        {el:'legend', text:"Contact Email:"},
        {el:"label",  text:'Your-Email:', for:'email'},
        {el:'input',  type:"email", id:'email', placeholder:'example@email.com',css:'control'},
        {el:'label',  text:'Create message:',for:'msg'},
        {el:'textarea',id:"msg"},
        {el:'input', type:'submit', value:"Submit"},
    ];

    document.body.classList.add('contact');
    let create;
    let form  = document.createElement('form'),
        field = document.createElement('fieldset'),
        leg   = document.createElement('legend'),
        lab1  = document.createElement('label'),
        lab2  = document.createElement('label'),
        inp1  = document.createElement('input'),
        sub   = document.createElement('input'),
        text  = document.createElement('textarea');
        // let cont = document.getElementById('content');


        export  default function Contact(){
      inp1.classList.add('control')

      form.setAttribute('action', '#');

      // leg.textContent = "Contact Email:";

      lab1.setAttribute('for','in1'),
      lab1.textContent = "Your-Email:";

      lab2.setAttribute('for','msg');
      lab2.textContent = "Create message:"

      inp1.setAttribute('type','email'),
      inp1.setAttribute('id','in1'),
      inp1.setAttribute('name','email'),
      // inp1.setAttribute('pattern', "[\w\.]+@[a-z]+\.[a-z]{3}"),
      inp1.setAttribute('placeholder','example@email.com');
      // inp1.setAttribute('required');

      sub.setAttribute('type','submit'),
      sub.setAttribute('value','submit');

      text.setAttribute('id','msg'),
      text.setAttribute('name','msg');
      // text.setAttribute('required');

      field.appendChild(leg);

      field.appendChild(lab1),
      field.appendChild(inp1),

      field.appendChild(lab2),
      field.appendChild(text);

      form.appendChild(field),
      form.appendChild(sub);

    return form;
    
  };

  
      