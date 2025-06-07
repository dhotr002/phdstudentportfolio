import { notFound } from 'next/navigation';
import { projects } from '@/lib/constants';
import Image from 'next/image';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 pt-48 pb-16">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      {/* Main Image */}
      {project.imageUrl && (
        // <figure className="mb-8">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden border mb-8">
            <Image
                src={`/${project.imageUrl}`} // Make sure this matches the image path in /public
                alt={project.title}
                fill
                className="object-cover"
            />
            </div>
        //     <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        //         Your caption goes here
        // </figcaption>
        // </figure>
      )}

      {/* Metadata */}
      <div className="text-sm text-muted-foreground mb-6 space-y-1">
        <p><strong>Date:</strong> {project.date}</p>
        <p><strong>Collaborators:</strong> {project.collaborators.join(', ')}</p>
      </div>

      {/* Highlights */}
      {project.highlights && (
        <ul className="list-disc list-inside text-base text-white space-y-3 mb-10">
          {/* {project.highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))} */}

          {/* Add extra points here */}
            <li>Additional point only for this page</li>
            <li>Another custom highlight for this project page</li>
        </ul>
      )}

      {/* Optional: Additional Images Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Additional Images</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative w-full h-64 rounded overflow-hidden">
            <Image
              src="/ct-rcem-1.jpg"
              alt="RCEM Side View"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-64 rounded overflow-hidden">
            <Image
              src="/cvcc.png"
              alt="CVCC Setup"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          These images show the actual RCEM and CVCC used for plasma-assisted combustion experiments.
        </p>
      </section>
    </main>
  );
}
