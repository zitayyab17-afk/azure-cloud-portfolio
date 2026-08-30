const skills = [
    "Azure",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Git",
    "JavaScript",
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
        name: "Azure Cloud Portfolio",
        description: "Built and deployed a cloud portfolio on Microsoft Azure with CI/CD and a serverless contact form that sends messages directly to my email.",
         services: [
        "Azure Storage",
        "Azure Static Website Hosting",
        "Azure Functions",
        "Azure Communication Services",
        "Application insights",
        "GitHub Actions",
        "Azure CLI",
        "Microsoft Entra ID",
        "Azure RBAC",
        "OIDC",
        "JavaScrip",
        "Node.js"
    ],
        status: "Completed",
        githubLink: "https://github.com/zitayyab17-afk/azure-cloud-portfolio.git",
        liveLink: "https://stazureportfoliob001.z33.web.core.windows.net/"
    },

    {
    name: "Highly Available Azure Web Infrastructure",
    description: "Designed and deployed highly available web infrastructure on Microsoft Azure using load-balanced Linux virtual machines, secure networking, Terraform Infrastructure as Code and GitHub Actions CI/CD with OIDC authentication.",
    services: [
        "Azure Virtual Machines",
        "Azure Virtual Network",
        "Azure Subnets",
        "Network Security Groups",
        "Azure Standard Load Balancer",
        "Backend Pools",
        "Health Probes",
        "Availability Set",
        "Azure Monitor",
        "Linux",
        "Nginx",
        "Terraform",
        "Azure Storage",
        "Terraform Remote State",
        "GitHub Actions",
        "Microsoft Entra ID",
        "Azure RBAC",
        "OIDC"
    ],
    status: "Completed",
    githubLink: "https://github.com/zitayyab17-afk/azure-high-availability-web-infrastructure",
    liveLink: ""
    },

    {
        name: "AWS Static Website with Terraform",
        description: "Hosted a multi-page static website on AWS using a private S3 bucket and CloudFront, with infrastructure provisioned through Terraform and automated deployment using GitHub Actions.",
        services: [
            "Amazon S3",
            "Amazon CloudFront",
            "Terraform",
            "GitHub Actions",
            "IAM",
            "GitHub Secrets",
            "S3 Remote Backend",
            "DynamoDB State Locking",
            "CloudFront Cache Invalidation",
            "S3 Server-Side Encryption"
        ],
        status: "Completed",
        githubLink: "https://github.com/zitayyab17-afk/zunaisha-terraform-website",
        liveLink: ""
    },

    {
        name: "AWS Serverless REST API",
        description: "Built a Serverless REST API on AWS using API Gateway, Lambda And DynamoDB.",
        services: [
            "AWS Lambda",
            "AWS API Gateway",
            "Amazon DynamoDB",
            "Terraform"
        ],
        status: "Completed",
        githubLink: "https://github.com/zitayyab17-afk/project2-serverless-api.git",
        liveLink:""
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

${project.liveLink ? `
<a
href = "${project.liveLink}"
target = "_blank"
rel = "noopener noreferrer"
>
Live Demo
</a>
` : ""}
    </div>
    </div>
    `;
    projectContainer.innerHTML += card
});
    const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", async function(event){
    event.preventDefault();
    const nameInput = document.querySelector("#name");
if(nameInput.value.trim() === ""){
    alert("Please Enter Your Name");
    return;
    }
    const emailInput = document.querySelector("#email");
    if(emailInput.value.trim() === ""){
        alert("Please Enter Your Email");
        return;
    }
    if(!emailInput.value.includes("@")){
        alert("Please Enter Your Valid Email");
        return;
    }
    const subjectInput = document.querySelector("#subject")
    if(subjectInput.value.trim() === ""){
        alert("Please Enter Subject");
    return;
    }
    const messageInput = document.querySelector("#message")
    if (messageInput.value.trim() === ""){
        alert("Please Enter Message");
        return;
    }

    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim()
    };
    const response = await fetch(
        "https://func-terraform-portfolio-b001.azurewebsites.net/api/contactformfunction",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
    );
    const result = await response.json();

if (result.success) {
    alert("Message sent successfully!");
    contactForm.reset();
}
        
});
