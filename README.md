# ☁️ Azure Cloud Portfolio

A personal Cloud & DevOps portfolio built and deployed on Microsoft Azure, demonstrating hands-on experience with Azure, Terraform, CI/CD automation, cloud security, GitHub Actions, serverless computing and JavaScript.

The project was first built manually to understand the underlying Azure services and deployment process. I then implemented CI/CD automation and rebuilt the infrastructure in a separate environment using Terraform to develop practical Infrastructure as Code (IaC) skills.

## 🚀 Live Website

**Live Demo:**  
https://stazureportfoliob001.z33.web.core.windows.net/

---

## 📌 Project Overview

This project demonstrates the end-to-end process of building, deploying, securing and automating a cloud-hosted portfolio website on Microsoft Azure.

The website showcases my cloud projects, technical skills and certifications while also serving as a practical environment for developing Cloud and DevOps engineering skills.

The project includes:

- Azure Static Website Hosting
- JavaScript-based dynamic website content
- Serverless contact form using Azure Functions
- Email delivery using Azure Communication Services
- GitHub Actions CI/CD
- Passwordless GitHub-to-Azure authentication using OIDC
- Azure RBAC
- Infrastructure as Code using Terraform
- Separate Terraform-managed test environment

---

## 🏗️ Architecture

### Production Deployment Flow

```text
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
Azure Storage $web Container
    ↓
Live Static Website
```

### Serverless Contact Form Flow

```text
Portfolio Website
    ↓
Contact Form
    ↓
JavaScript Fetch Request
    ↓
Azure Function
    ↓
Azure Communication Services Email
    ↓
Email Delivered to Portfolio Owner
```

### Terraform Infrastructure Flow

```text
Terraform Configuration
    ↓
AzureRM Provider
    ↓
Azure Resource Group
    ↓
Azure Storage + Static Website
    ↓
Azure Function Infrastructure
    ↓
Flex Consumption Plan
    ↓
Serverless Contact Form
```

---

## ⚙️ CI/CD Pipeline

A GitHub Actions workflow automatically deploys website changes whenever code is pushed to the `main` branch.

The pipeline:

1. Checks out the repository.
2. Authenticates to Azure using OIDC.
3. Uses Azure CLI to deploy the website.
4. Uploads the contents of the `website/` directory to the Azure Storage `$web` container.
5. Updates the live website automatically.

This removes the need for manual website uploads during normal development.

---

## 🔐 Cloud Security

The project implements several cloud security practices:

- Passwordless GitHub Actions authentication using OIDC federation
- Microsoft Entra ID App Registration
- Azure RBAC for authorization
- `Storage Blob Data Contributor` assigned at Storage Account scope
- Principle of least privilege
- No Azure client secrets stored in the GitHub Actions workflow
- Azure Communication Services connection string stored as a Function App environment variable
- `local.settings.json` excluded from Git
- Terraform state files excluded from Git
- `.tfvars` files excluded from Git
- HTTPS enforced on Azure resources

Sensitive Terraform state and local configuration files are protected through `.gitignore`.

---

## 🧱 Infrastructure as Code with Terraform

After completing the working Azure portfolio, I rebuilt the infrastructure in a separate Terraform-managed environment.

This allowed me to practise Infrastructure as Code without risking the existing working environment.

Terraform provisions and manages:

- Azure Resource Group
- Azure Storage Account
- Azure Static Website configuration
- Dedicated Function storage account
- Function deployment container
- Flex Consumption Service Plan
- Azure Function App
- Node.js 24 runtime
- HTTPS configuration
- CORS configuration
- Terraform outputs for website and Function endpoints

The Terraform-managed infrastructure was successfully deployed and tested end to end.

### Terraform Deployment Flow

```text
Terraform
    ↓
AzureRM Provider
    ↓
Azure Resource Group
    ↓
Terraform-managed Static Website
    ↓
Terraform-managed Azure Function
    ↓
Azure Communication Services
    ↓
Email Delivered Successfully
```

The Terraform environment was built separately rather than importing the original Azure resources. This allowed the original working project to remain available while I learned how to reproduce its infrastructure using IaC.

---

## 🛠️ Technologies Used

### Cloud

- Microsoft Azure
- Azure Storage
- Azure Static Website Hosting
- Azure Functions
- Azure Communication Services
- Microsoft Entra ID
- Azure RBAC

### Infrastructure as Code

- Terraform
- AzureRM Provider
- Terraform State
- Terraform Outputs

### DevOps

- Git
- GitHub
- GitHub Actions
- Azure CLI
- CI/CD
- OIDC
- YAML

### Development

- HTML5
- CSS3
- JavaScript (ES6)
- Node.js 24

---

## ✨ Website Features

- Responsive portfolio design
- Professional About section
- Dynamic Skills section generated using JavaScript
- Dynamic Project Cards generated from JavaScript objects
- Cloud certification section
- AWS credential verification links
- GitHub repository links
- Live Demo links
- Responsive navigation
- Modern project card layout
- Contact form
- JavaScript form validation
- Serverless contact-form backend
- Email delivery through Azure Communication Services

---

## 📂 Repository Structure

```text
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
├── function/
│   ├── src/
│   │   └── functions/
│   │       └── ContactFormFunction.js
│   ├── host.json
│   ├── package.json
│   └── package-lock.json
│
├── terraform/
│   ├── provider.tf
│   ├── main.tf
│   ├── storage.tf
│   ├── function.tf
│   ├── outputs.tf
│   └── .terraform.lock.hcl
│
├── docs/
├── screenshots/
├── README.md
└── .gitignore
```

Terraform state, provider downloads and local secrets are intentionally excluded from source control.

---

## 📸 Project Screenshots

### Live Portfolio Homepage

![Azure Portfolio Homepage](screenshots/azure-portfolio-homepage.jpeg)

### Projects Section

![Azure Portfolio Projects](screenshots/azure-portfolio-projects.jpeg)

### Successful GitHub Actions Deployment

![GitHub Actions Successful Deployment](screenshots/github-actions-success.jpeg)

### Project Architecture Diagram

![Azure cloud portfolio architecture](screenshots/azure-portfolio-architecture.png)

---

## 🧪 End-to-End Testing

The website and serverless backend were tested after deployment.

The Terraform-managed environment was also tested independently.

Successful Terraform test flow:

```text
Terraform-created Static Website
        ↓
JavaScript Contact Form
        ↓
Terraform-created Azure Function App
        ↓
Azure Communication Services
        ↓
Email Successfully Delivered
```

This confirmed that the independently rebuilt Terraform environment was functional end to end.

---

## 🧩 Challenges & Troubleshooting

Several real deployment and infrastructure issues were encountered and resolved during this project.

### GitHub Actions OIDC Permission

The GitHub Actions workflow initially failed because it did not have permission to request an OIDC token.

Resolved by configuring:

```yaml
permissions:
  id-token: write
  contents: read
```

---

### Azure Storage Authentication

Azure CLI initially failed to authenticate correctly when uploading website files.

Resolved by using:

```text
--auth-mode login
```

This ensures that Azure CLI uses the authenticated identity rather than relying on storage account keys.

---

### Azure RBAC

The GitHub Actions identity initially required the correct permissions to upload files.

The `Storage Blob Data Contributor` role was assigned at Storage Account scope rather than granting unnecessarily broad subscription-level permissions.

---

### Static Website 404

The initial website returned a 404 because the website files had not been correctly uploaded to the Azure Storage `$web` container.

The issue was identified and corrected by troubleshooting the Storage Account and deployment process.

---

### Terraform Azure Resource Provider Registration

During the Terraform implementation, the AzureRM provider initially attempted to register Azure Resource Providers automatically.

The provider configuration was adjusted appropriately for the Azure environment before continuing with deployment.

---

### Terraform Static Website Deprecation Warning

The original Terraform Storage Account configuration generated a provider warning because the inline `static_website` block was deprecated.

The configuration was updated to use:

```text
azurerm_storage_account_static_website
```

as a separate Terraform resource.

---

### Terraform and Manually Managed Settings

The Azure Communication Services connection string was intentionally kept outside the Terraform source code to prevent secrets from being committed to Git.

Terraform lifecycle configuration was used so that manually managed Function App settings were not removed during subsequent Terraform deployments.

CORS configuration was moved into Terraform so that it could be managed as infrastructure code.

---

### Azure Function Deployment

The Terraform-created Function App initially existed successfully but the Function was not visible in Azure.

The Function project was deployed using Azure Functions Core Tools:

```text
func azure functionapp publish func-terraform-portfolio-b001
```

The deployment completed successfully and Azure discovered:

```text
ContactFormFunction - [httpTrigger]
```

---

### Node.js Runtime Upgrade

During Function deployment, Azure reported that Node.js 20 was no longer supported.

The Terraform configuration was updated from:

```text
Node.js 20
```

to:

```text
Node.js 24
```

Terraform then performed an in-place update without destroying the Function App.

---

## 📚 What I Learned

Through this project I gained hands-on experience with:

### Azure

- Azure Resource Groups
- Azure Storage Accounts
- Azure Static Website Hosting
- Azure Functions
- Flex Consumption
- Azure Communication Services
- Microsoft Entra ID
- Azure RBAC
- Azure CLI

### DevOps

- Git and GitHub
- GitHub Actions
- CI/CD pipeline implementation
- YAML workflows
- OIDC federation
- Passwordless cloud authentication
- Deployment troubleshooting

### Terraform

- Terraform configuration files
- AzureRM provider
- `terraform init`
- `terraform fmt`
- `terraform validate`
- `terraform plan`
- `terraform apply`
- Terraform state
- Terraform outputs
- Resource dependencies
- In-place infrastructure updates
- Terraform lifecycle configuration
- Protecting state files and secrets with `.gitignore`
- Rebuilding existing cloud architecture using Infrastructure as Code

### Development

- JavaScript DOM manipulation
- Arrays and objects
- Dynamic rendering
- Template literals
- Form validation
- Fetch API
- Serverless API integration
- Node.js Azure Functions

### Troubleshooting

I also gained practical experience diagnosing real cloud deployment problems rather than only following a predefined tutorial.

This included authentication failures, RBAC permissions, Azure Storage deployment issues, Function discovery, CORS configuration, Terraform provider warnings, runtime upgrades and state-management considerations.

---

## 🔮 Future Improvements

Possible future improvements include:

- Azure Key Vault for improved secret management
- Azure Monitor and Application Insights
- Remote Terraform state using Azure Storage
- Terraform modules
- Automated Terraform CI/CD
- Custom domain
- HTTPS/CDN configuration through Azure Front Door
- Additional automated testing

These improvements are intentionally left for future projects so that additional Azure and DevOps services can be explored independently.

---

## 🎯 Project Purpose

This project forms part of my practical Cloud & DevOps engineering portfolio.

It demonstrates the progression from:

```text
Manual Cloud Deployment
        ↓
Application Development
        ↓
Serverless Integration
        ↓
CI/CD Automation
        ↓
Cloud Security
        ↓
Infrastructure as Code
        ↓
End-to-End Terraform Deployment
```

The project supports my development towards entry-level opportunities in:

- Cloud Engineering
- DevOps Engineering
- Platform Engineering
- Cloud Support
- Site Reliability Engineering (SRE)

---

## 👩‍💻 Author

**Bushra Alia**

AWS Certified Solutions Architect – Associate  
AWS Certified Cloud Practitioner