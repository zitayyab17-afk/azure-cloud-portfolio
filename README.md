# ☁️ Azure Cloud Portfolio

A personal Cloud & DevOps portfolio built and deployed on Microsoft Azure, demonstrating hands-on experience with Azure, CI/CD automation, cloud security, GitHub Actions and JavaScript.

The project was built manually first to understand the underlying Azure services and deployment process before introducing automation.

## 🚀 Live Website

**Live Demo:**
https://stazureportfoliob001.z33.web.core.windows.net/

---

## 📌 Project Overview

This project demonstrates the end-to-end process of building, deploying, securing and automating a static website on Microsoft Azure.

The website showcases my cloud projects, technical skills and certifications while serving as a practical environment for developing Cloud and DevOps engineering skills.

The deployment process is fully automated through GitHub Actions.

## 🏗️ Architecture

Current deployment flow:

Developer
↓
Git Push to GitHub
↓
GitHub Actions
↓
OIDC Authentication
↓
Microsoft Entra ID
↓
Azure RBAC
↓
Azure CLI
↓
Azure Storage `$web` Container
↓
Live Static Website

## ⚙️ CI/CD Pipeline

A GitHub Actions workflow automatically deploys changes whenever code is pushed to the `main` branch.

The pipeline:

1. Checks out the repository.
2. Authenticates to Azure using OIDC.
3. Uses Azure CLI to deploy the website.
4. Uploads the contents of the `website/` directory to the Azure Storage `$web` container.
5. Updates the live website automatically.

This removes the need for manual website uploads.

## 🔐 Cloud Security

The deployment follows cloud security best practices:

* Passwordless authentication using OIDC federation.
* Microsoft Entra ID App Registration for GitHub Actions.
* Azure RBAC for authorization.
* `Storage Blob Data Contributor` assigned at Storage Account scope.
* Principle of least privilege applied.
* No Azure passwords or client secrets stored in the workflow.

## 🛠️ Technologies Used

### Cloud

* Microsoft Azure
* Azure Storage
* Azure Static Website Hosting
* Microsoft Entra ID
* Azure RBAC

### DevOps

* Git
* GitHub
* GitHub Actions
* Azure CLI
* CI/CD
* OIDC
* YAML

### Development

* HTML5
* CSS3
* JavaScript (ES6)

## ✨ Website Features

* Responsive portfolio design
* Dynamic Skills section generated using JavaScript
* Dynamic Project Cards generated from JavaScript objects
* GitHub repository and Live Demo links
* Responsive navigation
* Modern project card layout

## 📂 Repository Structure

Azure-Portfolio/

├── .github/
│   └── workflows/
│       └── azure-static-webapp-deploy.yml
│
├── website/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── 404.html
│
├── docs/
├── screenshots/
├── terraform/
├── README.md
└── .gitignore

## 🧩 Challenges & Troubleshooting

Several real deployment issues were encountered and resolved during the project.

### GitHub Actions OIDC Permission

The workflow initially failed because GitHub Actions did not have permission to request an OIDC token.

Resolved by configuring:

`id-token: write`

and:

`contents: read`

### Azure Storage Authentication

Azure CLI initially failed to authenticate correctly when uploading files.

Resolved by using:

`--auth-mode login`

so the deployment uses the authenticated OIDC session.

### Azure RBAC

Deployment permissions were configured using the `Storage Blob Data Contributor` role at Storage Account scope instead of granting unnecessarily broad permissions.

### Static Website Deployment

The initial website returned a 404 because the website files had not been correctly uploaded to the Azure Storage `$web` container.

The issue was identified and corrected through Azure Storage troubleshooting.

## 📚 What I Learned

Through this project I gained hands-on experience with:

* Azure Storage and Static Website Hosting
* CI/CD pipeline implementation
* GitHub Actions workflows
* Git and GitHub
* Azure CLI
* Microsoft Entra ID
* OIDC federation
* Azure RBAC
* Least-privilege cloud security
* YAML
* JavaScript DOM manipulation
* Cloud deployment troubleshooting

## 🔮 Future Improvements

Planned improvements include:

* Contact form and JavaScript validation
* Azure Functions backend integration
* Infrastructure as Code using Terraform
* Azure Monitor / Application Insights
* Improved website design and responsiveness
* Additional project documentation and architecture diagrams

## 🎯 Project Purpose

This project forms part of my practical Cloud & DevOps portfolio as I work towards entry-level opportunities in:

* Cloud Engineering
* DevOps Engineering
* Platform Engineering
* Cloud Support
* Site Reliability Engineering (SRE)

## 👩‍💻 Author

**Bushra Alia**

AWS Certified Solutions Architect – Associate
AWS Certified Cloud Practitioner
