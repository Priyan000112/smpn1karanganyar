// Badge hexagon komponen — sesuai identitas visual
// Variasi: on-navy, on-cream, achieve, maroon

interface BadgeProps {
  variant?: 'on-navy' | 'on-cream' | 'achieve'
  accent?: 'maroon' | 'gold' | 'default'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode // SVG path content
}

const HEX = 'M28,2 52,16 52,46 28,60 4,46 4,16'

export default function HexBadge({ variant = 'on-cream', accent = 'default', size = 'md', children }: BadgeProps) {
  const sizes = { sm: 'w-10 h-11', md: 'w-14 h-16', lg: 'w-16 h-[72px]' }
  const glyphSizes = { sm: 'w-5 h-5', md: 'w-6 h-6', lg: 'w-7 h-7' }

  const hexFill =
    variant === 'achieve' ? '#e0b446' :
    variant === 'on-navy' ? '#f6f1e4' : '#f6f1e4'

  const hexStroke =
    accent === 'maroon' ? '#8a2a2f' :
    variant === 'achieve' ? '#0a1840' :
    variant === 'on-navy' ? '#c9982f' : '#10265c'

  const glyphStroke =
    variant === 'on-navy' ? '#10265c' :
    variant === 'achieve' ? '#0a1840' :
    accent === 'maroon' ? '#8a2a2f' : '#10265c'

  return (
    <div className={`${sizes[size]} relative flex items-center justify-center flex-shrink-0`}>
      {/* Hexagon background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 62" fill="none">
        <polygon points={HEX} fill={hexFill} />
        <polygon points={HEX} fill="none" stroke={hexStroke} strokeWidth="1.5" />
      </svg>
      {/* Glyph icon */}
      <div className={`relative ${glyphSizes[size]} z-10`}>
        <svg viewBox="0 0 24 24" fill="none" stroke={glyphStroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {children}
        </svg>
      </div>
    </div>
  )
}
