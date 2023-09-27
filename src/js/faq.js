function handleFAQVisibility(name) {
    var x = document.getElementById(name);
    var icon = x.previousElementSibling.querySelector('.icon i');

    if (x.style.display === 'none' || x.style.display === '') {
        x.style.display = 'block';
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-up');
    } else {
        x.style.display = 'none';
        icon.classList.remove('fa-caret-up');
        icon.classList.add('fa-caret-down');
    }
}