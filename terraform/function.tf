resource "azurerm_storage_account" "function_storage" {
  name                     = "stterraformfuncb001"
  resource_group_name      = azurerm_resource_group.terraform_portfolio.name
  location                 = azurerm_resource_group.terraform_portfolio.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_container" "function_deployment" {
  name                  = "function-deployment"
  storage_account_id    = azurerm_storage_account.function_storage.id
  container_access_type = "private"
}

resource "azurerm_service_plan" "function_plan" {
  name                = "plan-terraform-portfolio-functions"
  resource_group_name = azurerm_resource_group.terraform_portfolio.name
  location            = azurerm_resource_group.terraform_portfolio.location

  os_type  = "Linux"
  sku_name = "FC1"
}

resource "azurerm_function_app_flex_consumption" "contact_function" {
  name                = "func-terraform-portfolio-b001"
  resource_group_name = azurerm_resource_group.terraform_portfolio.name
  location            = azurerm_resource_group.terraform_portfolio.location
  service_plan_id     = azurerm_service_plan.function_plan.id
  https_only          = true

  storage_container_type = "blobContainer"

  storage_container_endpoint = "${azurerm_storage_account.function_storage.primary_blob_endpoint}${azurerm_storage_container.function_deployment.name}"

  storage_authentication_type = "StorageAccountConnectionString"
  storage_access_key          = azurerm_storage_account.function_storage.primary_access_key

  runtime_name    = "node"
  runtime_version = "24"

  maximum_instance_count = 10
  instance_memory_in_mb  = 512

  site_config {
    cors {
      allowed_origins = [
        "https://stterraformportfoliob001.z35.web.core.windows.net"
      ]

      support_credentials = false
    }
  }

  lifecycle {
    ignore_changes = [
      app_settings
    ]
  }
}