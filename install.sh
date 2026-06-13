#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Belise Swartwood - Finance Portfolio
# Install script: downloads every dependency required to run, build, and
# deploy the site. Safe to re-run at any time.
#
# Usage (from the project root):
#   chmod +x install.sh && ./install.sh
# ---------------------------------------------------------------------------

set -euo pipefail

echo ""
echo "==> Belise Swartwood - Finance Portfolio :: dependency install"
echo ""

# 1. Verify Node.js is available.
if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: Node.js was not found." >&2
  echo "Install Node.js 18 or newer from https://nodejs.org and re-run this script." >&2
  exit 1
fi
echo "    Node.js detected: $(node --version)"

# 2. Verify npm is available (ships with Node.js).
if ! command -v npm >/dev/null 2>&1; then
  echo "ERROR: npm was not found. Reinstall Node.js to restore it." >&2
  exit 1
fi
echo "    npm detected:     v$(npm --version)"

# 3. Install project dependencies.
echo ""
echo "==> Installing dependencies (npm install)..."
npm install

echo ""
echo "==> Done. All dependencies installed successfully."
echo ""
echo "Next steps:"
echo "  npm run dev      Start the local dev server (http://localhost:5173)"
echo "  npm run build    Produce an optimized production build in dist/"
echo "  npm run deploy   Build and deploy to Firebase Hosting"
echo ""
echo "To deploy you also need the Firebase CLI once:"
echo "  npm install -g firebase-tools   then   firebase login"
echo ""
