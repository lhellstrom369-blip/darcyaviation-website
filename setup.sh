#!/bin/bash

echo "🚀 Setting up Darcy Aviation Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi
echo "✅ Frontend dependencies installed"
echo ""

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd ../backend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi
echo "✅ Backend dependencies installed"
echo ""

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "✅ .env file created"
    echo ""
    echo "⚠️  IMPORTANT: Edit backend/.env and add your email credentials!"
    echo "   - EMAIL_USER: Your Gmail address"
    echo "   - EMAIL_PASSWORD: Your Gmail app-specific password"
    echo "   - BUSINESS_EMAIL: Where contact forms should be sent"
    echo ""
else
    echo "✅ .env file already exists"
    echo ""
fi

cd ..

echo "✨ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Edit backend/.env with your email credentials"
echo "   2. Run 'npm run dev' in the backend directory"
echo "   3. Run 'npm start' in the frontend directory"
echo ""
echo "🌐 Frontend will be available at: http://localhost:3000"
echo "🔌 Backend will be available at: http://localhost:5000"
echo ""
echo "📖 See README.md for detailed instructions"
