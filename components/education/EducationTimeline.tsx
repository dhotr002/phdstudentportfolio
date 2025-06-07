// 'use client';

// import { motion } from 'framer-motion';
// import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
// // import { cn } from '@/lib/utils';

// const educationData = [
//   {
//     id: 1,
//     degree: 'PhD in Mechanical Engineering',
//     institution: 'University of Minnesota',
//     location: 'Minneapolis, USA',
//     period: 'Jan 2021 - Present',
//     description: 'Specializing in thermal sciences, focusing on advanced combustion technologies and low-temperature plasma processes.',
//     achievements: [
//       'List achievements here',
//       'List achievements here',
//       'List achievements here'
//     ]
//   },
//   {
//     id: 2,
//     degree: 'MS in Mechanical Engineering',
//     institution: 'University of Minnesota',
//     location: 'Minneapolis, USA',
//     period: 'Sep 2018 - Dec 2020',
//     description: 'Specialized in fluid mechanics and thermodynamics, with a focus on hydrodynamic instabilities in a viscous jet.',
//     achievements: [
//       'List achievements here',
//       'List achievements here',
//       'List achievements here'
//     ]
//   },
//   {
//     id: 3,
//     degree: 'BE in Mechanical Engineering',
//     institution: 'University of Pune',
//     location: 'Pune, India',
//     period: '2014 - 2018',
//     description: 'Focused on computational fluid dynamics and heat transfer.',
//     achievements: [
//       'List achievements here',
//       'List achievements here',
//       'List achievements here'
//     ]
//   }
// ];

// export default function EducationTimeline() {
//   return (
//     <div className="max-w-4xl mx-auto">
//       {educationData.map((item, index) => (
//         <motion.div
//           key={item.id}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: index * 0.2 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="mb-8 last:mb-0"
//         >
//           <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
//             <div className="flex items-start gap-4">
//               <div className="bg-primary/10 p-3 rounded-full">
//                 <GraduationCap className="w-6 h-6 text-primary" />
//               </div>
              
//               <div className="flex-1">
//                 <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                
//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center text-muted-foreground">
//                     <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
//                     <span>{item.institution}, {item.location}</span>
//                   </div>
//                   <div className="flex items-center text-muted-foreground">
//                     <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
//                     <span>{item.period}</span>
//                   </div>
//                 </div>
                
//                 <p className="text-muted-foreground mb-4">{item.description}</p>
                
//                 <div>
//                   <h4 className="font-semibold text-primary mb-2 flex items-center">
//                     <Award className="w-4 h-4 mr-2 flex-shrink-0" />
//                     Achievements
//                   </h4>
//                   <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground">
//                     {item.achievements.map((achievement, i) => (
//                       <li key={i}>{achievement}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }



// New

'use client';

import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: 'PhD in Mechanical Engineering',
    institution: 'University of Minnesota',
    location: 'Minneapolis, USA',
    period: 'Jan 2021 - Present',
    description: 'Specializing in thermal sciences, focusing on advanced combustion technologies and low-temperature plasma processes.',
    achievements: [
    'Developed and set-up multiple experimental facilities for combustion and plasma research',
    'Published/presented 10+ papers at SAE, ASME, APS, Combustion Institute, and RSI',
    'Received 2023 Mestenhauser Student Award for Excellence in Campus Internationalization'
]
  },
  {
    id: 2,
    degree: 'MS in Mechanical Engineering',
    institution: 'University of Minnesota',
    location: 'Minneapolis, USA',
    period: 'Sep 2018 - Dec 2020',
    description: 'Specialized in fluid mechanics and thermodynamics, with a focus on hydrodynamic instabilities in a viscous jet.',
    achievements: [
      'Published in Physical Review Fluids',
      'Presented at two APS Division of Fluid Dynamics conferences',
      'Designed a Taylor-Couette facility and performed flow visualization with PIV and LIF'
    ]
  },
  {
    id: 3,
    degree: 'BE in Mechanical Engineering',
    institution: 'University of Pune',
    location: 'Pune, India',
    period: '2014 - 2018',
    description: 'Focused on computational fluid dynamics and heat transfer.',
    achievements: [
    'Part of the Formula student team; contributed to vehicle design and testing',
    'Won Best Technical Paper Presentation Award (2018)',
    'Conducted CFD studies of hypersonic inlet designs and isolator configurations',
    'Co-editor of college magazine and Mechanical Engineering newsletter'
    ]
  }
];

export default function EducationTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      {educationData.map((item) => (
        <div key={item.id} className="mb-8 last:mb-0">
          <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{item.institution}, {item.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{item.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                    Achievements
                  </h4>
                  <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
