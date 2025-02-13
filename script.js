//your JS code here. If required.
const input =document.getElementById("fname");
input.addEventListener("blur", ()=> {
	
    const inputField = document.getElementById("fname");
    
    inputField.value = inputField.value.toUpperCase();
});
