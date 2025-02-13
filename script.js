//your JS code here. If required.
document.getElementById("fname").addEventListener("blur", function() {
    // Get the input field
    const inputField = document.getElementById("fname");
    
    // Convert the value to uppercase
    inputField.value = inputField.value.toUpperCase();
});
