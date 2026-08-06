const skills = [
    "Azure",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Git",
    "Javascript",
    "Linux"
];
const skillsList = document.querySelector("#skills-list");
skills.forEach(function(skill){
    const skillsItem = document.createElement("li");
    skillsItem.textContent = skill;
    skillsList.appendChild(skillsItem);
});

const projects = [
    {
        name: "Azure Static Website",
        description: "Hosted a static wbsite using Azure Storage",
         services: [
        "Azure Storage",
        "Azure Static Website Hosting",
        "GitHub Actions",
        "Azure CLI",
        "Microsoft Entra ID",
        "Azure RBAC",
        "OIDC"
    ],
        status: "Completed",
        githubLink: "https://github.com/zitayyab17-afk/azure-cloud-portfolio.git",
        liveLink: "https://stazureportfoliob001.z33.web.core.windows.net/"
    },
    {
        name: "Serverless API",
        description: "Built a backend API using Azure serverless services.",
        services: [
            "Azure Functions",
            "API Gateway",
            "DynamoDB"
        ],
        status: "InProgress",
        githubLink: "https://github.com/zitayyab17-afk/project2-serverless-api.git",
        liveLink: "https://stazureportfoliob001.z33.web.core.windows.net/"
    }
];
const projectContainer = document.querySelector("#projects-container");
projects.forEach(function(project){
    const servicesHTML = project.services.map(function(service){
        return `<span class="tech-tag">${service}</span>`;
    }).join("");

    const card = `
    <div class = "project-card">
    <h3>${project.name}</h3>
    <h4>Description:</h4>
    <p> ${project.description}</p>
    <h4>Technologies And Services:</h4>

<div class="tech-container">
    ${servicesHTML}
</div>
<h4>Project Status:</h4>
    <p>${project.status}</p>

    <div class = "project-links">
    <a
    href = "${project.githubLink}"
    target = "_blank"
    rel = "noopener noreferrer"
    >
    View Code
    </a>

<a href = "${project.liveLink}"
    target = "_blank"
    rel = "noopener noreferrer"
    >
    Live Demo
    </a>
    </div>
    </div>
    `;
    projectContainer.innerHTML += card
});
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", function(event){
    event.preventDefault();
})
const nameInput = document.querySelector("#name");
if(nameInput.value.trim() === ""){
    alert("Please Enter Your Name");
}