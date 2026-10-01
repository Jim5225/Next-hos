@echo off
title Nexus Hospital - Local Sync Bridge & Cloudflare Tunnel
color 0B

echo ======================================================================
echo    NEXUS CARDIAC HOSPITAL - LOCAL SYNC BRIDGE & CLOUDFLARE TUNNEL
echo    Developed by: Veltrix AI Solutions
echo ======================================================================
echo.

:: 1. Check Python
where python >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Python is not installed or not in PATH!
    echo Please install Python 3.9+ or contact Veltrix AI Solutions.
    pause
    exit /b
)

echo [OK] Python detected.
echo.

:: 2. Launch Local Sync Bridge in Background
echo Starting Local Sync Bridge on Port 5000...
start "Nexus Local Sync Bridge" python nexus_sync_bridge.py
timeout /t 2 >nul

:: 3. Launch Cloudflare Tunnel
echo.
echo Launching Cloudflare Tunnel for Port 5000...
call start-tunnel.bat

pause
