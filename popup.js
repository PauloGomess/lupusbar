window.onload = function() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function() {
        popup.style.display = "none";
    }, 5000);
};
