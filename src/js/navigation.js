function navigationBar() {
    var subheader = document.getElementById("subheader");

    // Check if subheader exists before toggling
    if (subheader) {
        if (subheader.style.display === "flex") {
            subheader.style.display = "none";
        } else {
            subheader.style.display = "flex";
        }
    }
    return true;
}
