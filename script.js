let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = slideIndex;
    }
    
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatically change slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
document.getElementById('btn').addEventListener("click",function(event) {
    let obj = {
        'name': "jyoti",
    'email':"jyoti@gaml.com",
    'destination': "paris",
    'start_date' : "123",
    'end_date':"345"
    }
    event.preventDefault();
    fetch("http://localhost:8000/submit_booking.php",{headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },method:"POST",body:JSON.stringify(obj)}).then(response => response.text())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
        
    });
})