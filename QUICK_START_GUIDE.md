# Quick Start Guide: Publishing Your Pixel Icon Library

## Step 1: Create GitHub Repository (Manual)

### 1.1 Create the Repository on GitHub
1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name**: `pixel-icons` (or whatever you prefer)
   - **Description**: "A retro pixel art icon library for React"
   - **Public** or **Private**: Choose Public (required for npm)
   - ❌ **DO NOT** check "Add a README file"
   - ❌ **DO NOT** check "Add .gitignore"
   - ❌ **DO NOT** choose a license (you already have one)
3. Click **"Create repository"**

### 1.2 Note Your Repository URL
GitHub will show you a URL like:
```
https://github.com/yourusername/pixel-icons.git
```
Keep this handy!

## Step 2: Initialize Git Locally

Open your terminal in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Pixel icon library with 12 icons"

# Rename branch to main (if needed)
git branch -M main

# Connect to your GitHub repository (replace with YOUR URL)
git remote add origin https://github.com/yourusername/pixel-icons.git

# Push to GitHub
git push -u origin main
```

## Step 3: Update package.json with Your GitHub URL

Make sure your `package.json` has the correct repository URL:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/pixel-icons"
  }
}
```

## Step 4: Create npm Account (if you don't have one)

1. Go to https://www.npmjs.com/signup
2. Choose a username (this will be part of your package name if you use scoped packages)
3. Enter email and password
4. Verify your email address (check your inbox)

## Step 5: Choose Your Package Name

Your package name must be **unique** on npm. You have two options:

### Option A: Unscoped Package (Simple)
```json
"name": "pixel-icons-retro"
```
- Pros: Easy to install (`npm install pixel-icons-retro`)
- Cons: Harder to find unique names

**Check if available**: Visit https://www.npmjs.com/package/pixel-icons-retro

### Option B: Scoped Package (Recommended)
```json
"name": "@yourusername/pixel-icons"
```
- Pros: Always unique (uses your npm username)
- Cons: Slightly longer to type

**Important**: If using scoped package, you must publish with `--access public`

Update the `name` field in `package.json` with your chosen name.

## Step 6: Build Your Library

```bash
npm run build:lib
```

This creates a `dist/` folder with:
- `index.js` (CommonJS format)
- `index.mjs` (ES Module format)
- `index.d.ts` (TypeScript types)

**Check the dist folder** to make sure files were created!

## Step 7: Test Your Build (Optional but Recommended)

```bash
# Create a test package
npm pack
```

This creates a `.tgz` file like `pixel-icons-retro-1.0.0.tgz`

You can install this in another project to test:
```bash
cd /path/to/test/project
npm install /path/to/pixel-icons-retro-1.0.0.tgz
```

## Step 8: Login to npm

```bash
npm login
```

Enter:
- **Username**: Your npm username
- **Password**: Your npm password
- **Email**: Your registered email
- **OTP**: One-time password (if you enabled 2FA)

Verify you're logged in:
```bash
npm whoami
```

## Step 9: Publish to npm! 🚀

### For Unscoped Packages:
```bash
npm publish
```

### For Scoped Packages (@username/package):
```bash
npm publish --access public
```

**Success!** Your package is now live on npm! 🎉

View it at: `https://www.npmjs.com/package/your-package-name`

## Step 10: Install and Use Your Package

Now anyone (including you!) can install it:

```bash
npm install your-package-name
```

And use it:

```tsx
import { HomeIcon, HeartIcon } from 'your-package-name';

function App() {
  return (
    <div>
      <HomeIcon size={32} color="#EF4444" />
      <HeartIcon size={48} color="#10B981" />
    </div>
  );
}
```

## Updating Your Package

When you make changes:

```bash
# Make your code changes...

# Commit to git
git add .
git commit -m "Add new icons"
git push

# Update version (choose one)
npm version patch   # 1.0.0 -> 1.0.1 (bug fixes)
npm version minor   # 1.0.0 -> 1.1.0 (new features)
npm version major   # 1.0.0 -> 2.0.0 (breaking changes)

# Build and publish
npm run build:lib
npm publish
```

The `npm version` command automatically:
- Updates version in package.json
- Creates a git commit
- Creates a git tag

Then push the tags:
```bash
git push --tags
```

## Common Issues & Solutions

### ❌ "Package name already taken"
- Choose a different name
- Or use a scoped package: `@yourusername/pixel-icons`

### ❌ "You must verify your email"
- Check your email inbox
- Click the verification link from npm

### ❌ "You do not have permission to publish"
- Make sure you're logged in: `npm whoami`
- Check that the package name isn't taken
- For scoped packages, use `--access public`

### ❌ "402 Payment Required"
- Your package is scoped but you're trying to publish privately
- Use `npm publish --access public`

### ❌ Build fails
- Make sure all files in `/src/app/icons/` are valid
- Check for TypeScript errors
- Verify `vite.config.lib.ts` exists

### ❌ Git push fails
- Make sure you've created the GitHub repository
- Check that the remote URL is correct: `git remote -v`
- Try: `git push -u origin main --force` (first push only)

## Next Steps

✅ Add a GitHub badge to your README  
✅ Create GitHub releases for each version  
✅ Add more icons!  
✅ Share your package on social media  
✅ Add examples/demos to your GitHub repo  

## File Checklist

Make sure you have these files:
- ✅ `/src/app/icons/` (all your icon components)
- ✅ `/src/app/icons/index.ts` (exports all icons)
- ✅ `/package.json` (updated with your details)
- ✅ `/vite.config.lib.ts` (build configuration)
- ✅ `/README.md` (documentation)
- ✅ `/LICENSE` (MIT license)
- ✅ `/.npmignore` (excludes unnecessary files)

## Helpful Commands

```bash
# Check what will be published
npm pack --dry-run

# View package info
npm view your-package-name

# Unpublish (only within 72 hours)
npm unpublish your-package-name@1.0.0

# Check npm login status
npm whoami

# See all your published packages
npm profile get

# Check git status
git status

# View git remote
git remote -v
```

Good luck! 🚀
