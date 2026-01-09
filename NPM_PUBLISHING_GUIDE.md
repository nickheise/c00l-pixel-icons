# Publishing Your Pixel Icon Library to npm

## Step 1: Prepare Your Package

### 1.1 Update package.json

Change these fields in your `package.json`:

```json
{
  "name": "your-pixel-icons", // Change to your unique package name
  "version": "1.0.0",
  "description": "A retro pixel art icon library for React",
  "private": false, // Remove or set to false
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "files": [
    "dist"
  ],
  "keywords": [
    "react",
    "icons",
    "pixel-art",
    "retro",
    "svg",
    "components"
  ],
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-pixel-icons"
  }
}
```

### 1.2 Create a Build Configuration

You need to build only the icons (not the demo app). Install build tools:

```bash
npm install --save-dev typescript @types/react vite-plugin-dts
```

### 1.3 Create vite.config.lib.ts

Create a separate Vite config for building the library:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/app/icons/index.ts'),
      name: 'PixelIcons',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
```

### 1.4 Create tsconfig.lib.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "declaration": true,
    "declarationMap": true
  },
  "include": ["src/app/icons"],
  "exclude": ["node_modules", "dist", "src/app/App.tsx"]
}
```

### 1.5 Add Build Script

Add this to your package.json scripts:

```json
"scripts": {
  "build": "vite build",
  "build:lib": "vite build --config vite.config.lib.ts",
  "prepublishOnly": "npm run build:lib"
}
```

## Step 2: Build Your Package

```bash
npm run build:lib
```

This will create a `dist` folder with:
- `index.js` (CommonJS)
- `index.mjs` (ES Module)
- `index.d.ts` (TypeScript types)

## Step 3: Test Locally (Optional but Recommended)

```bash
npm pack
```

This creates a `.tgz` file you can install in another project to test:

```bash
cd /path/to/test/project
npm install /path/to/your-pixel-icons-1.0.0.tgz
```

## Step 4: Create npm Account

1. Go to https://www.npmjs.com/signup
2. Create an account
3. Verify your email

## Step 5: Login to npm

```bash
npm login
```

Enter your:
- Username
- Password
- Email
- One-time password (if you have 2FA enabled)

## Step 6: Publish!

```bash
npm publish
```

If your package name starts with `@`, it's scoped. Scoped packages are private by default, so use:

```bash
npm publish --access public
```

## Step 7: Update Versions

When you make changes:

```bash
# For bug fixes
npm version patch

# For new features (backward compatible)
npm version minor

# For breaking changes
npm version major

# Then publish
npm publish
```

## Installing Your Package

After publishing, anyone can install it:

```bash
npm install your-pixel-icons
```

And use it:

```tsx
import { HomeIcon, HeartIcon } from 'your-pixel-icons';

function App() {
  return (
    <div>
      <HomeIcon size={24} color="#000" />
      <HeartIcon size={32} color="#EF4444" />
    </div>
  );
}
```

## Important Notes

- **Name must be unique** - Check https://www.npmjs.com/package/your-name first
- **Semantic versioning** - Follow semver (major.minor.patch)
- **README.md** - Create one with usage examples
- **LICENSE** - Add a license file (MIT is common for open source)
- **.npmignore** - Or use "files" in package.json to control what's published

## Troubleshooting

**"Package name taken"**
- Choose a different name or use a scoped package (@yourname/pixel-icons)

**"You must verify your email"**
- Check your email and click the verification link

**"You do not have permission to publish"**
- Make sure you're logged in: `npm whoami`
- Check if the package name is already taken

**Build errors**
- Make sure all TypeScript types are correct
- Check that peer dependencies are properly configured
