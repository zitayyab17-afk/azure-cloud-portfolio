resource "azurerm_storage_account" "portfolio_storage" {
  name                     = "stterraformportfoliob001"
  resource_group_name      = azurerm_resource_group.terraform_portfolio.name
  location                 = azurerm_resource_group.terraform_portfolio.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_account_static_website" "portfolio_static_website" {
  storage_account_id = azurerm_storage_account.portfolio_storage.id

  index_document     = "index.html"
  error_404_document = "404.html"
}