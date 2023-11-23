document.addEventListener('DOMContentLoaded',function(){
    alert('Hi! Please toggle the button below to activiate the day and night modes.');
})

function toggleTheme() {
    let body = document.body;
    body.classList.toggle("dark-mode");

    let isDarkMode = body.classList.contains("dark-mode");

    document.querySelectorAll('.image-5, .image-6, .image-7, .button-night').forEach((image) => {image.style.display =isDarkMode ? 'block':'none';
    });

    button.textContent = isDarkMode ? 'Switch to Day! ☀️' : 'Switch to Night! 🌕';

    let title = document.querySelector('h1');
    title.textContent = isDarkMode ? "An's 🌕 Time Skincare Routine" : "An's ☀️ Time Skincare Routine";
}

button.onclick= toggleTheme;


