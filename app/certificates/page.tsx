import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import CertificateGrid from '@/components/certificates/CertificateGrid';

export const metadata: Metadata = {
	title: 'Certificates | Akash Dhotre',
	description: 'View academic and professional certificates earned by Akash Dhotre.',
};

export default function CertificatesPage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="Awards & Honors"
					description="Academic and professional awards showcasing my expertise and continuous learning."
				/>

				<CertificateGrid />
			</SectionContainer>
		</div>
	);
}