import React, { useState } from 'react';
import {
  HomeIcon,
  HeartIcon,
  StarIcon,
  UserIcon,
  SearchIcon,
  BellIcon,
  SettingsIcon,
  MailIcon,
  CalendarIcon,
  CheckIcon,
  XIcon,
  ChevronRightIcon,
} from './icons';

const App: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState(24);
  const [selectedColor, setSelectedColor] = useState('#000000');

  const icons = [
    { name: 'HomeIcon', component: HomeIcon },
    { name: 'HeartIcon', component: HeartIcon },
    { name: 'StarIcon', component: StarIcon },
    { name: 'UserIcon', component: UserIcon },
    { name: 'SearchIcon', component: SearchIcon },
    { name: 'BellIcon', component: BellIcon },
    { name: 'SettingsIcon', component: SettingsIcon },
    { name: 'MailIcon', component: MailIcon },
    { name: 'CalendarIcon', component: CalendarIcon },
    { name: 'CheckIcon', component: CheckIcon },
    { name: 'XIcon', component: XIcon },
    { name: 'ChevronRightIcon', component: ChevronRightIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Pixel Icon Library</h1>
          <p className="text-slate-600">
            A collection of retro pixel art React icon components ready for npm
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Customize Icons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Size: {selectedSize}px
              </label>
              <input
                type="range"
                min="16"
                max="64"
                value={selectedSize}
                onChange={(e) => setSelectedSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-12 h-10 rounded border border-slate-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {icons.map(({ name, component: Icon }) => (
            <div
              key={name}
              className="bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-shadow duration-200 hover:border-blue-300"
            >
              <div className="flex items-center justify-center w-full h-24">
                <Icon size={selectedSize} color={selectedColor} />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-900">{name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Usage Instructions */}
        <div className="mt-12 bg-white rounded-xl shadow-md border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Usage</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Import Icons</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                <code>{`import { HomeIcon, HeartIcon } from 'your-icon-library';`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Use in Components</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                <code>{`<HomeIcon size={24} color="#000000" />\n<HeartIcon size={32} color="#EF4444" />`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Props</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li>
                  <span className="font-medium">size</span>: number | string (default: 24)
                </li>
                <li>
                  <span className="font-medium">color</span>: string (default: 'currentColor')
                </li>
                <li>
                  <span className="font-medium">className</span>: string - for Tailwind/CSS classes
                </li>
                <li>All standard SVG props are supported</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Package Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            📦 Publishing to npm
          </h2>
          <div className="text-blue-800 space-y-3">
            <p>To publish this icon library as an npm package:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Update your <code className="bg-blue-100 px-2 py-1 rounded">package.json</code> with proper metadata (name, version, description)</li>
              <li>Add <code className="bg-blue-100 px-2 py-1 rounded">"main": "dist/index.js"</code> and <code className="bg-blue-100 px-2 py-1 rounded">"types": "dist/index.d.ts"</code></li>
              <li>Set up a build process (TypeScript compiler or bundler like Rollup/Vite)</li>
              <li>Add <code className="bg-blue-100 px-2 py-1 rounded">"files": ["dist"]</code> to include only built files</li>
              <li>Run <code className="bg-blue-100 px-2 py-1 rounded">npm login</code> to authenticate</li>
              <li>Run <code className="bg-blue-100 px-2 py-1 rounded">npm publish</code> to publish your package</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;