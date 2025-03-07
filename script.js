function registerProduct(){
    document.getElementById("detailscontainer").style.display = "block";
    document.getElementById("buttoncontainer").style.display = "none";
    document.getElementById("lblName").innerText = document.getElementById("txtName").value;
    document.getElementById("lblPrice").innerText = document.getElementById("txtnumber").value;
    document.getElementById("lblCity").innerText = document.getElementById("lstCities").value;

    stockAvailability = document.getElementById("lblStock");
    if(document.getElementById("optStock").checked){
        stockAvailability.textContent = "Available";
    } else {
        stockAvailability.textContent = "Not-Available";
    }
}
function editProduct(){
    document.getElementById("lblTitle").textContent = "EDIT PRODUCT";
    document.getElementById("btnRegister").textContent = "SAVE";
    document.getElementById("btnRegister").className = "btn btn-success";

}