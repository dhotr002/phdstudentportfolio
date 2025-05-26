import { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';

export const metadata: Metadata = {
  title: 'About | Akash Dhotre',
  description: 'Learn about Akash Dhotre',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="About Me"
          description="Learn about my journey, interests, and aspirations."
        />

        <AboutContent />
      </SectionContainer>
    </div>
  );
}