import { HeroSection, ProjectShowcase, CareerTimeline, TechStack } from '@/widgets';

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
