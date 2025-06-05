# Запуск: .\deploy.ps1

$ErrorActionPreference = "Stop"

# Определяем корневую папку проекта
$ProjectRoot = $PSScriptRoot
$FrontendDir = Join-Path $ProjectRoot "frontend"
$BackendDir = Join-Path $ProjectRoot "backend"
$FrontendZip = Join-Path $ProjectRoot "frontend-dist.zip"
$BackendZip = Join-Path $ProjectRoot "backend.zip"

# Параметры для SSH
$SshUser = "root"
$SshHost = "185.41.161.180"
$RemotePath = "/root/"

try {
    # Билд фронтенда
    Write-Host "Building frontend in $FrontendDir..."
    Set-Location $FrontendDir
    npm install
    npm run build
    if (-not (Test-Path "dist")) {
        throw "Frontend build failed: dist directory not found"
    }
    Write-Host "Compressing frontend..."
    Remove-Item $FrontendZip -ErrorAction SilentlyContinue
    Compress-Archive -Path dist -DestinationPath $FrontendZip -Force

    # Билд бэкенда
    Write-Host "Building backend in $BackendDir..."
    Set-Location $BackendDir
    npm install
    npm run build
    if (-not (Test-Path "dist")) {
        throw "Backend build failed: dist directory not found"
    }
    Start-Sleep -Seconds 5
    Write-Host "Compressing backend..."
    Remove-Item $BackendZip -ErrorAction SilentlyContinue
    Compress-Archive -Path dist, package.json, package-lock.json, favicon.png, .strapi, public -DestinationPath $BackendZip -Force

    # Отправка архивов
    Write-Host "Copying archives to $SshUser@$SshHost..."
    if (-not (Test-Path $FrontendZip) -or -not (Test-Path $BackendZip)) {
        throw "Zip files not created"
    }
    scp $FrontendZip "$($SshUser)@$($SshHost):$RemotePath"
    scp $BackendZip "$($SshUser)@$($SshHost):$RemotePath"

    # Вызов update.sh на VM
    # Write-Host "Running /root/update.sh on VM..."
    # ssh $SshUser@$SshHost "/root/update.sh"
    # if (-not $?) {
    #     throw "Failed to run /root/update.sh on VM"
    # }

    # Write-Host "Deployment completed successfully!"
}
catch {
    Write-Error "Deployment failed: $($_.Exception.Message)"
    exit 1
}
finally {
    Set-Location $ProjectRoot
}