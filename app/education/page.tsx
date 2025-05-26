import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import EducationTimeline from '@/components/education/EducationTimeline';

export const metadata: Metadata = {
	title: 'Education | Akash Dhotre',
	description: 'Explore Akash Dhotre\'s academic journey, qualifications, and achievements.',
};

export default function EducationPage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="Education"
					description="My academic journey and qualifications."
				/>

				<EducationTimeline />
			</SectionContainer>
		</div>
	);
}