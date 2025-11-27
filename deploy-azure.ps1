# Manual deployment script for Azure Static Web Apps (PowerShell)

Write-Host "🚀 Deploying KAAI Website to Azure Static Web Apps..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Step 1: Install Azure Static Web Apps CLI" -ForegroundColor Yellow
Write-Host "npm install -g @azure/static-web-apps-cli" -ForegroundColor White
Write-Host ""
Write-Host "Step 2: Get your deployment token" -ForegroundColor Yellow
Write-Host "1. Go to Azure Portal" -ForegroundColor White
Write-Host "2. Open your Static Web App" -ForegroundColor White
Write-Host "3. Click 'Manage deployment token'" -ForegroundColor White
Write-Host "4. Copy the token" -ForegroundColor White
Write-Host ""
Write-Host "Step 3: Deploy" -ForegroundColor Yellow
Write-Host "swa deploy ./ --deployment-token=YOUR_DEPLOYMENT_TOKEN_HERE" -ForegroundColor White
Write-Host ""
Write-Host "Replace YOUR_DEPLOYMENT_TOKEN_HERE with your actual token" -ForegroundColor Green

