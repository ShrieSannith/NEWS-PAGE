const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

 function changeVideo(videoUrl) {
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = videoUrl;
}
    
document.getElementById('scroll-left').addEventListener('click', function() {
    const scrollContainer = document.querySelector('div[style*="overflow-x: auto"]');
    scrollContainer.scrollBy({
        top: 0,
        left: -300, // Adjust the scroll distance
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    const scrollContainer = document.querySelector('div[style*="overflow-x: auto"]');
    scrollContainer.scrollBy({
        top: 0,
        left: 300, // Adjust the scroll distance
        behavior: 'smooth'
    });
});


fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            let options = '';
            data.forEach(country => {
                options += `<option value="${country.name.common}">`;
            });
            document.getElementById('countries').innerHTML = options;
        })
    .catch(error => console.log('Error fetching country data:', error));
        
    
