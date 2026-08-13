output "terraform_static_website_url" {
  description = "Primary endpoint of the Terraform-managed Azure static website"
  value       = azurerm_storage_account.portfolio_storage.primary_web_endpoint
}

output "terraform_function_hostname" {
  description = "Default hostname of the Terraform-managed Azure Function App"
  value       = azurerm_function_app_flex_consumption.contact_function.default_hostname
}