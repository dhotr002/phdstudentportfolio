'use client';

import Image from 'next/image';
import Link from 'next/link';

type Collaborator = {
  name: string;
  logo: string;
  url?: string;
};

const COLLABS: Collaborator[] = [
  { name: 'Department of Energy', logo: '/logos/doe.png', url: 'https://www.energy.gov/' },
  { name: 'LCCMR', logo: '/logos/lccmr.jpg', url: 'https://www.lccmr.mn.gov/' },
  { name: 'Sandia National Laboratories', logo: '/logos/sandia.png', url: 'https://www.sandia.gov/' },
  { name: 'KAUST', logo: '/logos/kaust.png', url: 'https://www.kaust.edu.sa/' },
  { name: 'Colorado School of Mines', logo: '/logos/mines.png', url: 'https://mechanical.mines.edu/' },
  { name: 'Carnegie Mellon University', logo: '/logos/cmu.png', url: 'https://www.cmu.edu/' },
  { name: 'University of Minnesota', logo: '/logos/umn.png', url: 'https://twin-cities.umn.edu/' },
  { name: 'Augusta University', logo: '/logos/augusta.png', url: 'https://www.augusta.edu/' },
  { name: 'Cummins', logo: '/logos/cummins.png' },
  { name: 'Transient Plasma Systems', logo: '/logos/tps.png' },
  { name: 'Old Dominion University', logo: '/logos/odu.png' },
];

export default function Collaborators() {
  return (
    <section className="mt-16 border-t pt-12">
      <h2 className="text-3xl font-bold text-center mb-3">Collaborators</h2>
      <p className="text-center text-muted-foreground mb-10">
        Academia and industry collaborations.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-14">
        {COLLABS.map(({ name, logo, url }) => {
          const img = logo.startsWith('/') ? logo : `/${logo}`;
          const logoImg = (
            <div className="flex flex-col items-center">
              <Image
                src={img}
                alt={name}
                width={240}
                height={120}
                // className="h-28 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                className="h-28 w-auto object-contain transition-transform hover:scale-105"

              />
              {/* optional names under logos */}
              {/* <span className="mt-2 text-xs text-muted-foreground">{name}</span> */}
            </div>
          );
          return url ? (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              {logoImg}
            </Link>
          ) : (
            <div key={name}>{logoImg}</div>
          );
        })}
      </div>
    </section>
  );
}
