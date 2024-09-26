const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        darkModeToggle.textContent = '☀️'; 
    } else {
        darkModeToggle.textContent = '🌙';
    }
});
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'Java', 'DSA'],
        datasets: [{
            label: 'Skill Level',
            data: [90, 85, 80, 30, 80, 80, 70],
            backgroundColor: 'rgba(0, 120, 215, 0.3)',
            borderColor: '#0078d7',
            borderWidth: 2,
            pointBackgroundColor: '#0078d7'
        }]
    },
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        if (scrollY > section.offsetTop - window.innerHeight / 1.5) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
        }
    });
});
const imageCarousel = document.getElementById('carousel-image');
const images = ['IMAGES/IMG2.jpg','IMAGES/IMG4.jpg','IMAGES/IMG5.jpg','IMAGES/IMG6.jpg',"IMAGES/IMG1.jpg"];
let currentIndex = 0;

imageCarousel.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    imageCarousel.src = images[currentIndex];
});
