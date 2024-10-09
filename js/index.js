document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);

            const currentLocation = window.location.pathname.split("/").pop(); 
            const navLinks = document.querySelectorAll('.links a');
            
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href').split("/").pop();
                if (linkHref === currentLocation) {
                    link.classList.add('isactive');
                }
            });
        });
        const content = document.querySelector('.main');
        setTimeout(() => {
            content.classList.add('visible');
        }, 1000);

        const sub = document.querySelector('.sub');
        setTimeout(() => {
            sub.classList.add('visible');
        }, 1500);
});

function toggleBurger() {
    document.querySelector('.links').classList.toggle('show');
    document.querySelector('.burger').classList.toggle('cross');
    console.log('clicked');
}