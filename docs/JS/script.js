function toggleTextBox() {
    var popupTextBox = document.getElementById("popup-text-box");
    
    
    if (popupTextBox.style.display === "none" || popupTextBox.style.display === "") {
        popupTextBox.style.display = "block"; 
    } else {
        popupTextBox.style.display = "none"; 
    }
}
