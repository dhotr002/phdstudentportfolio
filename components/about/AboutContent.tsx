'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Book, FlaskRound as Flask, Heart } from 'lucide-react';
import CVButton from '@/components/common/CVButton';

export default function AboutContent() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<div className="relative rounded-lg overflow-hidden shadow-xl">
					<Image
						src="https://media.licdn.com/dms/image/v2/D4D03AQGlBYa-32mWAQ/profile-displayphoto-shrink_800_800/B4DZaDo9sEGcAg-/0/1745965276185?e=1753315200&v=beta&t=ioDPR1EBmqt9Zylp_e1zpN97_c1JvR4M6JYAcosvldM"
						alt="Akash Dhotre in lab"
						width={600}
						height={800}
						className="object-cover w-full h-[500px]"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
					<div className="absolute bottom-0 left-0 p-6">
						<h3 className="text-xl font-semibold mb-2">Akash Dhotre</h3>
						<p className="text-muted-foreground">PhD Candidate in Mechanical Engineering</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: true }}
				className="space-y-6"
			>
				<h2 className="text-3xl font-bold mb-6">About Me</h2>

				<p className="text-muted-foreground">
					I am a Ph.D. candidate at the Department of Mechanical Engineering, University of Minnesota, Twin Cities, working in the T.E. Murphy Engine Research Laboratory (MERL). My research focuses on advancing clean energy solutions by studying complex reacting flows, synthetic/carbon-neutral fuels, and energy storage technologies. 
				</p>

				<p className="text-muted-foreground">
					I utilize both experimental and numerical techniques to investigate the physics and kinetics of reactive flows to develop a deeper understanding of advanced combustion systems and low-temperature plasma processes, contributing to cleaner and more efficient energy generation technologies.
				</p>

				<div className="grid grid-cols-2 gap-4 my-8">
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Flask className="h-10 w-10 text-chart-1 mb-2" />
						<h3 className="font-medium">Research</h3> 
					</div>
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Book className="h-10 w-10 text-chart-2 mb-2" />
						<h3 className="font-medium">Learning</h3>
					</div>
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Award className="h-10 w-10 text-chart-3 mb-2" />
						<h3 className="font-medium">Excellence</h3>
					</div>
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Heart className="h-10 w-10 text-chart-4 mb-2" />
						<h3 className="font-medium">Passion</h3>
					</div>
				</div>

				<p className="text-muted-foreground">
					I'm currently seeking opportunities to apply my knowledge and skills in a professional research environment where I can continue to grow and make meaningful contributions to the field of thermal sciences and combustion.
				</p>

				<CVButton />
			</motion.div>
		</div>
	);
}