import {
  About,
  Hero,
  HomeCta,
  Services,
  Stats,
  VisionMission,
  WhyChoose,
} from '@/components/home-sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChoose />
      <VisionMission />
      <HomeCta />
    </>
  )
}
