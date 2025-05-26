import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import Image from 'next/image';

export default function ServicePage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="Service & Outreach"
          description="Contributions to the academic community, student mentorship, and professional engagement."
        />

        {/* === Service Item 1 === */}
        <div className="bg-muted/10 p-6 rounded-lg shadow-sm mt-10 space-y-4">
          <div className="md:flex md:space-x-6">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/service/service1.jpg" // Replace with your image
                alt="Service Image 1"
                width={600}
                height={400}
                className="rounded w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-lg font-bold italic text-primary">Diversity and Inclusion Outreach (DIO)</h2>
              <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
                <li>Organized STEM outreach programs for underrepresented middle school students</li>
                <li>Conducted plasma and combustion science demos at local libraries and high schools</li>
                <li>Mentored 10+ students through summer bridge programs in engineering fundamentals</li>
                <li>Collaborated with national labs to create inclusive recruitment panels</li>
              </ul>
            </div>
          </div>
        </div>

        {/* === Service Item 2 === */}
        <div className="p-6 mt-12 space-y-4">
          <h2 className="text-lg font-bold italic text-primary">Graduate Student Leadership & Committee Roles</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Served as departmental graduate student representative for 2 academic years</li>
            <li>Member of the hiring committee for tenure-track faculty in fluid dynamics</li>
            <li>Organized weekly graduate student seminars and invited external speakers</li>
            <li>Led planning for department’s annual Research Showcase event (150+ attendees)</li>
          </ul>
        </div>

        {/* === Service Item 3 === */}
        <div className="p-6 mt-12 space-y-4">
          <h2 className="text-lg font-bold italic text-primary">Professional Society Engagement</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Session chair at SAE Powertrains 2025 and ASME ICE Forward 2024 conferences</li>
            <li>Reviewer for Combustion and Flame, SAE Technical Papers, and Applied Energy</li>
            <li>Presented at outreach webinars for early-career researchers in combustion</li>
          </ul>
        </div>
      </SectionContainer>
    </div>
  );
}
