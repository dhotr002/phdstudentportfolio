import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectsIntro from '@/components/projects/ProjectsIntro';
import { projects, researchStats } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Projects | Akash Dhotre',
  description: 'Explore the projects I have been involved in during my academic journey.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <ProjectsIntro
          blurb="Over the past few years I’ve built and studied plasma-assisted ignition and pre-chamber systems across RCEM, optical/metal engines, and CVCCs—combining diagnostics (PLIF, Schlieren, OH*/IR), CFD/FEA, hardware design, and control to push lean stability, efficiency, and emissions."
          stats={researchStats}
        />

        <PageHeader title="Research Projects" description="Explore the projects I have been involved in during my academic journey." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} {...p} index={i} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}



// import { Metadata } from 'next';
// import SectionContainer from '@/components/common/SectionContainer';
// import PageHeader from '@/components/common/PageHeader';
// import ProjectCard from '@/components/projects/ProjectCard';
// import { projects } from '@/lib/constants';

// export const metadata: Metadata = {
// 	title: 'Projects | Akash Dhotre',
// 	description: 'Explore the projects I have been invvolved in during my academic journey.',
// };

// export default function ProjectsPage() {
// 	return (
// 		<div className="pt-24">
// 			<SectionContainer>
// 				<PageHeader
// 					title="Research Projects"
// 					description="Explore the projects I have been involved in during my academic journey."
// 				/>

// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// 				{/* <div className="flex flex-col gap-6 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
// 					{projects.map((project, index) => (
// 						<ProjectCard
// 							key={project.id}
// 							title={project.title}
// 							// description={project.description}
// 							highlights={project.highlights}
// 							imageUrl={project.imageUrl}
// 							date={project.date}
// 							collaborators={project.collaborators}
// 							link={project.link}
// 							index={index}
// 						/>
// 					))}
// 				</div>
// 			</SectionContainer>
// 		</div>
// 	);
// }