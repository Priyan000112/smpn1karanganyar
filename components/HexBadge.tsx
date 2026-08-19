// Badge hexagon komponen — sesuai identitas visual v2
// Render SVG hexagon + glyph path langsung, bukan via children

const HEX = '28,2 52,16 52,46 28,60 4,46 4,16'

type Variant = 'on-navy' | 'on-cream' | 'achieve'
type Accent = 'maroon' | 'default'

interface BadgeProps {
  variant?: Variant
  accent?: Accent
  size?: 'sm' | 'md' | 'lg'
  glyphPath: string // raw SVG path/circle/etc sebagai string
}

export default function HexBadge({ variant = 'on-cream', accent = 'default', size = 'md', glyphPath }: BadgeProps) {
  const dims = { sm: [40, 44], md: [56, 62], lg: [64, 72] }
  const glyphSize = { sm: 16, md: 22, lg: 26 }
  const [w, h] = dims[size]
  const gs = glyphSize[size]
  const offset = (28 - gs / 2)

  const hexFill =
    variant === 'achieve' ? '#e0b446' : '#f6f1e4'

  const hexStroke =
    accent === 'maroon' ? '#8a2a2f' :
    variant === 'achieve' ? '#0a1840' :
    variant === 'on-navy' ? '#c9982f' : '#10265c'

  const glyphStroke =
    variant === 'on-navy' ? '#f6f1e4' :
    variant === 'achieve' ? '#0a1840' :
    accent === 'maroon' ? '#8a2a2f' : '#10265c'

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 56 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* Hexagon */}
      <polygon points={HEX} fill={hexFill} />
      <polygon points={HEX} fill="none" stroke={hexStroke} strokeWidth="1.5" />

      {/* Glyph icon — centered dalam hex */}
      <g transform={`translate(${offset}, ${(62 - gs) / 2})`}>
        <svg
          width={gs}
          height={gs}
          viewBox="0 0 24 24"
          fill="none"
          stroke={glyphStroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          dangerouslySetInnerHTML={{ __html: glyphPath }}
        />
      </g>
    </svg>
  )
}
