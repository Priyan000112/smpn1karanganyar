import HeroSlider from '@/components/HeroSlider'
import WelcomeSection from '@/components/WelcomeSection'
import StatsSection from '@/components/StatsSection'
import BlogSection from '@/components/BlogSection'
import EkskulSection from '@/components/EkskulSection'
import GuruSection from '@/components/GuruSection'
import FasilitasSection from '@/components/FasilitasSection'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <StatsSection />
      <EkskulSection />
      <FasilitasSection />
      <GuruSection />
      <BlogSection />
    </>
  )
}
