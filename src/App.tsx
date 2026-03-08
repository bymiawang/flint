import { useNavState } from './hooks/useNavState'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useCounterAnimation } from './hooks/useCounterAnimation'
import { useTAMBars } from './hooks/useTAMBars'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Product } from './components/Product'
import { HowItWorks } from './components/HowItWorks'
import { Demo } from './components/Demo'
import { Moat } from './components/Moat'
import { Market } from './components/Market'
import { Competitors } from './components/Competitors'
import { BusinessModel } from './components/BusinessModel'
import { Milestones } from './components/Milestones'
import { Team } from './components/Team'
import { Ask } from './components/Ask'

export default function App() {
  useNavState()
  useScrollReveal()
  useCounterAnimation()
  useTAMBars()

  return (
    <div id="top">
      <Nav />
      <Hero />
      <Problem />
      <Product />
      <HowItWorks />
      <Demo />
      <Moat />
      <Market />
      <Competitors />
      <BusinessModel />
      <Milestones />
      <Team />
      <Ask />
    </div>
  )
}
