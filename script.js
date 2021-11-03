const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('mouseover', function () {
        link.classList.add('accent');
    })
    link.addEventListener('mouseout', function () {
        link.classList.remove('accent');
    })
})