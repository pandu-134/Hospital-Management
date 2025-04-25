let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

// Add event listeners to all "share" icons
document.querySelectorAll('.fa-share').forEach(icon => {
    icon.addEventListener('click', () => {
        alert('Share this document!');
        // Add sharing logic here
    });
});

// Add event listeners to all "eye" icons
document.querySelectorAll('.fa-eye').forEach(icon => {
    icon.addEventListener('click', () => {
        alert('Opening document preview...');
        // Add viewing logic here
    });
});

// Add event listeners to all "heart" icons
document.querySelectorAll('.fa-heart').forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.target.classList.toggle('liked'); // Toggle a "liked" class
        if (event.target.classList.contains('liked')) {
            alert('Added to favorites!');
        } else {
            alert('Removed from favorites!');
        }
    });
});

