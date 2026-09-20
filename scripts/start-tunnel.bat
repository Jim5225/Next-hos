@echo off
title Nexus Hospital - Dagor ERP Cloudflare Tunnel
color 0A

echo ======================================================================
echo    NEXUS CARDIAC HOSPITAL - DAGOR ERP CLOUDFLARE TUNNEL BRIDGE
echo ======================================================================
echo.
echo Checking connection to Dagor ERP Local IP (192.168.15.220)...

ping -n 1 192.168.15.220 >nul
if errorlevel 1 (
    echo [WARNING] Cannot reach 192.168.15.220!
    echo Please make sure this PC is connected to Nexus Hospital's Local Network / WiFi.
    echo.
    set /p proceed="Do you want to continue anyway? (y/n): "
    if /i not "%proceed%"=="y" exit /b
) else (
    echo [OK] Successfully reached Dagor ERP at 192.168.15.220!
)

echo.
echo Checking for cloudflared...
where cloudflared >nul 2>nul
if errorlevel 1 (
    if not exist "cloudflared.exe" (
        echo Downloading official cloudflared for Windows...
        powershell -Command "Invoke-WebRequest -Uri 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe' -OutFile 'cloudflared.exe'"
        echo [OK] cloudflared downloaded successfully!
    )
    set CLOUDFLARED_CMD=.\cloudflared.exe
) else (
    set CLOUDFLARED_CMD=cloudflared
)

echo.
echo ======================================================================
echo Launching Secure Cloudflare Quick Tunnel to http://192.168.15.220
echo Please look for the URL ending with '.trycloudflare.com' below:
echo ======================================================================
echo.

%CLOUDFLARED_CMD% tunnel --url http://192.168.15.220

pause
