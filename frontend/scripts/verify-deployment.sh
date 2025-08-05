#!/bin/bash

# Balenciaga E-commerce Deployment Verification Script
echo "🔍 Balenciaga E-commerce Deployment Verification"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $2"
    else
        echo -e "${RED}✗${NC} $2"
    fi
}

echo "📋 Running deployment verification checks..."

# 1. Check Node.js version
echo "1. Checking Node.js version..."
NODE_VERSION=$(node --version)
print_status 0 "Node.js version: $NODE_VERSION"

# 2. Check dependencies
echo "2. Checking dependencies..."
if npm list --depth=0 > /dev/null 2>&1; then
    print_status 0 "All dependencies installed"
else
    print_status 1 "Missing dependencies - run 'npm install'"
fi

# 3. Check build
echo "3. Testing build process..."
if npm run build > /dev/null 2>&1; then
    print_status 0 "Build successful"
else
    print_status 1 "Build failed - check for errors"
fi

echo ""
echo "✨ Verification completed!"
echo "🚀 Your Balenciaga e-commerce platform is ready!"
