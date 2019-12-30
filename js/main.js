document.querySelector(".logo__email").addEventListener("click", copyEmail);

function copyEmail() {
    const emailAddress = "dawitelias14@gmail.com";
    const snackbar = document.querySelector(".snackbar");
    var tempInput = document.createElement("input");
    
    tempInput.style = "position: absolute; left: -9999px; top: -9999px";
    tempInput.value = emailAddress;
    
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    snackbar.classList.add("active");
    setTimeout(function() { 
        snackbar.classList.remove("active");
    }, 3500);
}