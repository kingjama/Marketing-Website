let button=document.querySelectorAll(".index-button1")

button.forEach(item=>{item.addEventListener("click", function(event){
    event.target.style.backgroundColor="red";
})})


// var s = document.createElement("input"); 
//                 s.setAttribute("type", "submit"); 
//                 s.setAttribute("value", "Submit"); 
  
//                  Append the email_ID input to the form 
//                 form.append(ID);  
                
//                 // Append the password to the form 
//                 form.append(PWD);  
                
//                 // Append the button to the form 
//                 form.append(s);  
  
//                 document.getElementsById("myForm")[0] 
//                .appendChild("body")

let header=document.querySelectorAll("h3")
header.forEach(item=>{item.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor="lightblue"
})})