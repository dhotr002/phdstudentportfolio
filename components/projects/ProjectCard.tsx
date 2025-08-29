'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar, Users } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  title: string;
  description?: string;     // fallback if no highlights
  highlights?: string[];    // show only a couple on the card
  details?: string;         // full write-up for the modal
  images?: string[];        // optional gallery for the modal
  imageUrl: string;
  date: string;
  collaborators: string[];
  link?: string;            // optional external/internal page
  index: number;
}

export default function ProjectCard({
  title,
  description,
  highlights,
  details,
  images,
  imageUrl,
  date,
  collaborators,
  link,
  index,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  // normalize image path (accepts "ct-rcem.png" or "/projects/ct-rcem.png")
  const cover = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
        onClick={() => setOpen(true)}
        className="group cursor-pointer overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
      >
        {/* <div className="relative h-48 overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div> */}
        <div className="relative aspect-video rounded-t-lg bg-muted flex items-center justify-center">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-contain p-2" // no crop, small padding
          />
        </div>


        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>

            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{date}</span>
              </div>
              {collaborators?.length > 0 && (
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{collaborators.join(', ')}</span>
                </div>
              )}
            </div>

            {highlights?.length ? (
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {highlights.slice(0, 2).map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              description && <p className="text-muted-foreground">{description}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-primary text-sm">View details →</span>
            {link && (
              <Link
                href={link}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Open page <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
        project={{
          title,
          imageUrl: cover,
          date,
          collaborators,
          details,         // long text
          images,          // optional gallery
        }}
      />
    </>
  );
}





// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ExternalLink, Calendar, Users } from 'lucide-react';
// // import { cn } from '@/lib/utils';
// import ProjectModal from "./ProjectModal";


// interface ProjectCardProps {
//   title: string;
//   description?: string;
//   highlights?: string[];
//   imageUrl: string;
//   date: string;
//   collaborators: string[];
//   link?: string;
//   index: number;
// }

// export default function ProjectCard({
//   title,
//   description,
//   highlights,
//   imageUrl,
//   date,
//   collaborators,
//   link,
//   index,
// }: ProjectCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: index * 0.1 }}
//       viewport={{ once: true, margin: "-100px" }}
//       className="group overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
//     >
//       {/* <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true, margin: "-100px" }}
//       className="group overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
//       > */}

//       <div className="relative h-48 overflow-hidden">
//         <Image
//           src={imageUrl}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>
      
//       <div className="p-6">
//         <div className="mb-4">
//           <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
//             {title}
//           </h3>
          
//           <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
//             <div className="flex items-center">
//               <Calendar className="h-3 w-3 mr-1" />
//               <span>{date}</span>
//             </div>
            
//             <div className="flex items-center">
//               <Users className="h-3 w-3 mr-1" />
//               <span>{collaborators.join(', ')}</span>
//             </div>
//           </div>
          
//           {highlights ? (
//             <ul className="list-disc list-inside text-muted-foreground space-y-1">
//               {highlights.map((point, i) => (
//                 <li key={i}>{point}</li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-muted-foreground">{description}</p>
//           )}
//         </div>
        
//         {link && (
//           <Link 
//             href={link} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
//           >
//             View Project Details
//             <ExternalLink className="ml-1 h-3 w-3" />
//           </Link>
//         )}
//       </div>
//     </motion.div>
//   );
// }