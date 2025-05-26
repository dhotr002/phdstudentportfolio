import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import { publications, presentations } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Publications | Akash Dhotre',
  description: 'Browse research publications by Akash Dhotre.',
};

export default function PublicationsPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="Publications"
          description="Browse my research publications and scholarly articles."
        />

        {/* Google Scholar Button */}
        <div className="mb-6">
          <a
            href="https://scholar.google.com/citations?user=ioqHS4YAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-black px-4 py-2 rounded hover:bg-primary/80 transition-colors"
          >
            <img
              src="https://scholar.google.com/intl/en/scholar/images/1x/scholar_logo_64dp.png"
              alt="Google Scholar"
              style={{ height: '20px', width: 'auto' }}
            />
          </a>
        </div>

        {/* Publications Subheading */}
        <h2 className="text-xl font-bold mb-4 mt-8 border-b border-muted pb-2">
            Journal Publications
            </h2>
        <ul className="space-y-6">
          {publications.map((pub, idx) => (
            <li key={idx} className="bg-card p-4 rounded shadow">
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-lg font-semibold text-primary hover:underline"
              >
                {pub.title}  <ExternalLink className="h-4 w-4" />

                
              </a>
              <div
                className="text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: pub.authors }}
              />
              <div className="text-sm">{pub.journal}</div>
            </li>
          ))}
        </ul>

        {/* Presentations Subheading */}
        <h2 className="text-xl font-bold mb-4 mt-12 border-b border-muted pb-2">
        Presentations and Posters
        </h2>
        <ul className="space-y-6">
        {presentations.map((pres, idx) => (
            <li key={idx} className="bg-card p-4 rounded shadow">
            <span className="text-lg font-semibold text-primary">{pres.title}</span>
            {/* Remove authors if not present in presentations */}
            <div className="text-sm">
                <span className="italic">{pres.event}</span>
                {pres.role && (
                <span className="text-muted-foreground"> ({pres.role})</span>
                )}
            </div>
            </li>
        ))}
        </ul>
      </SectionContainer>
    </div>
  );
}
