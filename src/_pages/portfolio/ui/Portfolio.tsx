import { ScrollProgressBar } from '@/widgets';
import { HeroSection } from './HeroSection';
import { ProjectShowcase } from './ProjectShowcase';
import { CareerTimeline } from './CareerTimeline';
import { TechStack } from './TechStack';

export function Portfolio() {
  return (
    <div className='min-h-screen'>
      <ScrollProgressBar />
      <HeroSection />
      <ProjectShowcase />
      <CareerTimeline />
      <TechStack />
    </div>
  );
}
