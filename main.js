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
  },
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

// Select parent element of all new content
let wholeForm = document.querySelector("#fields");

// Create for loop
for(let i = 0; i < formData.length; i++){
      if(formData[i].type === "textarea"){

    // Create needed HTML nodes
      let textarea = document.createElement("textarea");

    // / Set attributes for the textarea element(type(text), name(id), label(placeholder))
      textarea.setAttribute("type", formData[i].type);
      textarea.setAttribute("placeholder", formData[i].label);
      textarea.setAttribute("id", formData[i].id);

    // Insert New DOM nodes into page
      wholeForm.appendChild(textarea)

} else if (formData[i].type === "select") {

    // Create needed HTML nodes
      let select = document.createElement("select");

    // Set attributes for the select element(type(text), name(id), label(placeholder))
      select.setAttribute("type", formData[i].type);
      select.setAttribute("placeholder", formData[i].label);
      select.setAttribute("id", formData[i].id);

    // Insert New DOM nodes into page
      wholeForm.appendChild(select)

      // Create for loop for dropdown options
        for (let k=0; k<formData[i].options.length; k++){
            let option = document.createElement("option");

            let option1 = document.createTextNode(formData[i].options[k].label);

            option.appendChild(option1);

            option.setAttribute("value", formData[i].options[k].value);
            select.appendChild(option);
        }

} else {

      // Create needed HTML nodes
        let input = document.createElement("input");

      // Set attributes for the input element(type, name(id), label(placeholder))
        input.setAttribute("type", formData[i].type);
        input.setAttribute("placeholder", formData[i].label);
        input.setAttribute("id", formData[i].id);

      // Insert New DOM nodes into page
        wholeForm.appendChild(input);
}
};
