// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
// ( function(){
  // Select the first element from the array
  // let first = formData[ 0 ];
  // Log the first object
  // console.log( first );
  // Log the string "First Name"
  // console.log( first.label );
// } )();


// -------- Your Code Goes Below this Line --------


function fruityLoops(){
  let parDiv=document.querySelector("#fields");
  
  
  for (let i=0; i<formData.length; i++){
    let elem; 
    
  
    if (formData[i].type==="select"){
    elem =document.createElement("select");
    elem.setAttribute("placeholder", formData[i].label);
    elem.id =formData[i].id;
    op_elem = document.createElement("option");
    elem.appendChild(op_elem);
  
  }else if(formData[i].type==="textarea"){
    elem =document.createElement("textarea");
    elem.setAttribute("placeholder", formData[i].label);  
    
  }else{
    let type =formData[i].type;
    elem =document.createElement("input");
    elem.id =formData[i].id; 
    elem.setAttribute("placeholder", formData[i].label);
  }
    
  parDiv.appendChild(elem);
  }

}
fruityLoops();


