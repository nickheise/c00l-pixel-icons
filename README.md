# Pixel Icon Library

A collection of retro pixel art React icon components with a nostalgic 8-bit aesthetic. Perfect for retro-themed projects, games, or anyone looking for that distinctive pixel art style.

## Features

✨ **12 Unique Pixel Art Icons** - Home, Heart, Star, User, Search, Bell, Settings, Mail, Calendar, Check, X, and ChevronRight  
🎨 **Fully Customizable** - Size, color, and className props  
⚡ **Lightweight** - Pure SVG components with no dependencies  
📦 **Tree-shakeable** - Import only what you need  
🔷 **TypeScript** - Full type definitions included  
♿ **Accessible** - ARIA attributes and semantic markup

## Installation

```bash
npm install your-pixel-icons
```

## Usage

```tsx
import { HomeIcon, HeartIcon, StarIcon } from 'your-pixel-icons';

function App() {
  return (
    <div>
      <HomeIcon size={24} color="#000000" />
      <HeartIcon size={32} color="#EF4444" />
      <StarIcon size={48} color="#FCD34D" className="hover:scale-110" />
    </div>
  );
}
```

## Available Icons

- `HomeIcon` - Pixel art house
- `HeartIcon` - Pixel art heart
- `StarIcon` - Pixel art star
- `UserIcon` - Pixel art person
- `SearchIcon` - Pixel art magnifying glass
- `BellIcon` - Pixel art notification bell
- `SettingsIcon` - Pixel art gear/cog
- `MailIcon` - Pixel art envelope
- `CalendarIcon` - Pixel art calendar
- `CheckIcon` - Pixel art checkmark
- `XIcon` - Pixel art close/X
- `ChevronRightIcon` - Pixel art right arrow

## Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color (any valid CSS color) |
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `SVGProps<SVGSVGElement>` | - | All standard SVG attributes |

## Examples

### Basic Usage

```tsx
<HomeIcon />
```

### Custom Size

```tsx
<HeartIcon size={48} />
<StarIcon size="3rem" />
```

### Custom Color

```tsx
<CheckIcon color="#10B981" />
<XIcon color="rgb(239, 68, 68)" />
```

### With Tailwind CSS

```tsx
<BellIcon 
  size={24} 
  className="text-blue-500 hover:text-blue-700 transition-colors cursor-pointer" 
/>
```

### With Inline Styles

```tsx
<SettingsIcon 
  size={32}
  style={{ transform: 'rotate(45deg)' }}
/>
```

### Responsive Sizing

```tsx
<SearchIcon className="w-6 h-6 md:w-8 md:h-8" />
```

## License

MIT © [Your Name]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you find this library helpful, please consider giving it a ⭐ on GitHub!
