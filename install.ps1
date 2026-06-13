#!/usr/bin/env pwsh
# ---------------------------------------------------------------------------
# Belise Swartwood - Finance Portfolio
# Install script: downloads every dependency required to run, build, and
# deploy the site. Safe to re-run at any time.
#
# Usage (from the project root):
#   ./install.ps1
# ---------------------------------------------------------------------------

$ErrorActionPreference = 'Stop'

Write-Host ''
Write-Host '==> Belise Swartwood - Finance Portfolio :: dependency install' -ForegroundColor Cyan
Write-Host ''

# 1. Verify Node.js is available.
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host 'ERROR: Node.js was not found.' -ForegroundColor Red
    Write-Host 'Install Node.js 18 or newer from https://nodejs.org and re-run this script.'
    exit 1
}
Write-Host "    Node.js detected: $(node --version)"

# 2. Verify npm is available (ships with Node.js).
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host 'ERROR: npm was not found. Reinstall Node.js to restore it.' -ForegroundColor Red
    exit 1
}
Write-Host "    npm detected:     v$(npm --version)"

# 3. Install project dependencies.
Write-Host ''
Write-Host '==> Installing dependencies (npm install)...' -ForegroundColor Cyan
npm install

Write-Host ''
Write-Host '==> Done. All dependencies installed successfully.' -ForegroundColor Green
Write-Host ''
Write-Host 'Next steps:'
Write-Host '  npm run dev      Start the local dev server (http://localhost:5173)'
Write-Host '  npm run build    Produce an optimized production build in dist/'
Write-Host '  npm run deploy   Build and deploy to Firebase Hosting'
Write-Host ''
Write-Host 'To deploy you also need the Firebase CLI once:'
Write-Host '  npm install -g firebase-tools   then   firebase login'
Write-Host ''
