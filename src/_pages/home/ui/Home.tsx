import { HeroSection } from './HeroSection';
import { ProjectShowcase } from './ProjectShowcase';
import { CareerTimeline } from './CareerTimeline';
import { TechStack } from './TechStack';

export function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <ProjectShowcase />
      <CareerTimeline />
      <TechStack />
    </div>
  );
}
