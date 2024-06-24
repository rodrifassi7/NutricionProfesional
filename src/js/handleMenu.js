document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('navbar-default');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});