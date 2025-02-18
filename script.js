const nav = document.querySelector('.nav'),
    links = nav.querySelectorAll('li'),
    totalLinks = links.length;

for (let i = 0; i < totalLinks; i++) {
    let a = links[i].querySelector("a");

    a.addEventListener('click', function () {
        for (let j = 0; j < totalLinks; j++) {
            links[j].querySelector("a").classList.remove('active');
        }

        this.classList.add('active');
    })
}

function showPage(pageId) {
    document.querySelectorAll('.container-fluid').forEach(section => {
        section.style.display = 'none';
    });


    let selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'inline-flex';
    selectedPage.classList.add('activePage');
}

document.addEventListener('DOMContentLoaded', function () {
    showPage('home');
})

let projects = [

    {
        title: "Portfolio",
        des: "A responsive portfolio website showcasing my skills projects, and contact details in an interactive way (Fully resposive).",
        frontend: "HTML5, CSS, Bootstrap, JavaScript",
        api: "not use",
        url: "https://prem-singh333.github.io/portfolio-website/",
        img: "assits/Screenshot 2025-02-17 230722.png",

    },

    {
        title: "Weather App",
        des: "A simple weather application that fetches real-time weather data for any city. It displays temperature, humidity, wind speed,and weather coditions using the OpenWeatherMap API.",
        frontend: "HTML, CSS, JavaScript",
        api: "OpenWeatherMap",
        url: "https://prem-singh333.github.io/weather-app/",
        img: "assits/Screenshot 2025-02-17 231134.png"
    }
];

let container = document.getElementById('projects-container');

projects.forEach(function (project) {
    let projectCard = `<div class=" col-lg-3 col-md-4 col-sm-6 py-3">
                    <div class="boxes p-2 project-card">
                        <div class="project-image">
                            <img src="${project.img}">
                        </div>

                        <h6 class="h6 mt-3">${project.title}</h6>
                        <p class="font-weight-lighter skill-text"><b>description:</b> ${project.des}</p>

                        <h6 class="h6">Teach Stack Uses</h6>
                        <p class="font-weight-lighter skill-text"><b>Frontend:</b> ${project.frontend}</p>
                        <p class="font-weight-lighter skill-text"><b>API:</b> ${project.api}</p>

                        <a class="btn btnLinks shadow-none focus-ring p-1"
                            href="${project.url}" id="demoProject" target="_blank">Live
                            Demo</a>
                    </div>
                </div>`

    container.innerHTML += projectCard;
});

let submitMsg = document.querySelector(".bg-success");


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let form = new FormData(this);
    let formObj = {}

    form.forEach((value, key) => {
        formObj[key] = value;
    })

    submitMsg.classList.add("showNotify");

    setTimeout(function(){
        submitMsg.classList.remove("showNotify")
    },2500);

    this.reset();
});