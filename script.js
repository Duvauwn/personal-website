const projects = document.querySelectorAll('.link');
projects.forEach(project => {
    project.addEventListener('mouseover', function () {
        project.classList.add('accent');
    })
    project.addEventListener('mouseout', function () {
        project.classList.remove('accent');
    })
})
const navs = document.querySelectorAll('.nav');
navs.forEach(nav => {
    nav.addEventListener('mouseover', function () {
        nav.classList.add('accent');
    })
    nav.addEventListener('mouseout', function () {
        nav.classList.remove('accent');
    })
})