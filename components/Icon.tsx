import {
  Tent, Flag, HeartPulse, CircleDot, Circle, Dribbble,
  Music2, Music, FlaskConical, Languages, Cpu, Shield,
  School, Monitor, BookOpen, Dumbbell, Building2,
  UtensilsCrossed, Star, LucideProps,
} from 'lucide-react'

const iconMap: Record<string, React.FC<LucideProps>> = {
  Tent,
  Flag,
  HeartPulse,
  CircleDot,
  Volleyball: Circle,
  Dribbble,
  Music2,
  Music,
  FlaskConical,
  Languages,
  Cpu,
  Shield,
  School,
  Monitor,
  BookOpen,
  Dumbbell,
  Building2,
  UtensilsCrossed,
  Star,
}

interface Props extends LucideProps {
  name: string
}

export default function Icon({ name, ...props }: Props) {
  const LucideIcon = iconMap[name]
  if (!LucideIcon) return null
  return <LucideIcon {...props} />
}
