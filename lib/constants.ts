export const projects = [
	{
		id: 1,
		title: "Optical Rapid Compression and Expansion Machine (CT-RCEM)",
		highlights: [
			"Designed and operated a programmable optical RCEM to study autoignition and ignition-assisted combustion processes, including ammonia-DME blends, spark ignition, pre-chamber combustion, and plasma-assisted ignition.",
			"Developed and implemented a nonlinear feedforward controller, repetitive controller, and iterative learning control (ILC) on a dSPACE real-time system for precise piston trajectory control.",
			"Performed CFD simulations using CONVERGE to complement experiments and inform design iterations."
		],		
		imageUrl: "ct-rcem.png", // Place this image in /public/images/projects/
		date: "2021 – Present",
		collaborators: ["Dr. W. Northrop", "T.E. Murphy Lab"],
		link: "#" // optional, you can add a link to a publication or PDF if needed
	},
	{
		id: 8,
		title: "Plasma-Assisted Combustion in a Constant Volume Combustion Chamber (CVCC)",
		highlights: [
			"Applied advanced optical diagnostics including multi-species chemiluminescence, Schlieren imaging, optical emission spectroscopy (OES), and laser-induced fluorescence (LIF) to investigate combustion phenomena.",
			"Studied plasma-assisted ignition, flame propagation, and combustion dynamics of natural gas under engine-relevant pressure and temperature conditions.",
			"Utilized high-speed imaging and image processing techniques to visualize ignition kernel development and jet-interaction effects in a pre-chamber configuration."
		],
		imageUrl: "cvcc.png", // add this image in /public/images/projects/
		date: "2022 – 2023",
		collaborators: ["Dr. W. Northrop", "T.E. Murphy Lab"],
		link: "#"
	},
	{
		id: 13,
		title: "Plasma-assisted pre-chamber combustion",
		description: "Developed eco-friendly methods for synthesizing metal nanoparticles using plant extracts as reducing agents, with applications in catalysis and antimicrobial surfaces.",
		imageUrl: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		date: "Jan 2023 - Apr 2023",
		collaborators: ["Dr. A. Chatterjee", "R. Kumar"],
		link: "#"
	},
	{
		id: 2,
		title: "Biodegradable Polymers from Agricultural Waste",
		description: "Researched methods to convert agricultural waste into biodegradable polymers, focusing on improving material properties for packaging applications.",
		imageUrl: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		date: "Aug 2022 - Dec 2022",
		collaborators: ["Prof. S. Banerjee", "M. Singh"],
		link: "#"
	},
	{
		id: 3,
		title: "Novel Catalysts for Carbon Dioxide Reduction",
		description: "Investigated transition metal complexes as catalysts for electrochemical reduction of carbon dioxide to value-added chemicals, contributing to carbon capture utilization strategies.",
		imageUrl: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		date: "May 2022 - Aug 2022",
		collaborators: ["Dr. P. Roy", "N. Das"],
		link: "#"
	},
	{
		id: 4,
		title: "Water Purification using Modified Activated Carbon",
		description: "Developed modified activated carbon materials for efficient removal of heavy metals and organic pollutants from wastewater, with potential applications in rural water treatment.",
		imageUrl: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		date: "Jan 2022 - Apr 2022",
		collaborators: ["Prof. D. Sharma", "K. Patel"],
		link: "#"
	},
	{
		id: 5,
		title: "Medicinal Properties of Traditional Herbal Extracts",
		description: "Analyzed chemical composition and medicinal properties of traditional herbal extracts from Eastern India, identifying potential lead compounds for pharmaceutical development.",
		imageUrl: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		date: "Sep 2021 - Dec 2021",
		collaborators: ["Dr. M. Gupta", "S. Biswas"],
		link: "#"
	},
	{
		id: 6,
		title: "Soil Quality Analysis in Agricultural Regions",
		description: "Conducted comprehensive chemical analysis of soil samples from various agricultural regions in West Bengal to assess nutrient content and pollution levels.",
		imageUrl: "https://images.pexels.com/photos/5472310/pexels-photo-5472310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		date: "May 2021 - Aug 2021",
		collaborators: ["Dr. A. Krishnan", "T. Ghosh"],
		link: "#"
	}
];

export const contactInfo = {
	email: "email@example.com",
	phone: "+91 98765 43210",
	address: "Kolkata, West Bengal, India",
	socialMedia: {
		linkedin: "https://linkedin.com",
		twitter: "https://twitter.com",
		github: "https://github.com"
	}
};

export const publications = [
  {
    id: "J01",
    authors: `D. Sen, <u><b>A. Dhotre</b></u>, K. Buchanan, A. Srna, Patanjali SLPSK, R. Rajasegar`,
    title: "Machine Learning-Augmented Flame Front Detection in High-Speed Imaging: A Physics-Guided Framework",
    journal: "AIAA SciTech Forum, 2026 [Submitted]",
    // link: "#"
  },
  {
    id: "J02",
    authors: `K. Buchanan, A. Hethmon, <u><b>A. Dhotre</b></u>, A. Srna, R. Rajasegar`,
    title: "Interaction and ignition process of multiple injections of oxygenated fuels in an optical, heavy-duty diesel engine",
    journal: "Proceedings of the Combustion Institute, 2025 [Submitted]",
    // link: "#"
  },
  {
    id: "J03",
    authors: `<u><b>A. Dhotre</b></u>, A. Voris, N. Okey, S. Kane, W. Northrop`,
    title: "Comparison of spark and turbulent jet ignition in a fully ammonia-fueled engine",
    journal: "SAE Technical Paper, 2025",
    link: "https://www.sae.org/publications/technical-papers/content/2025-01-0201/"
  },
  {
    id: "J04",
    authors: `<u><b>A. Dhotre</b></u>, G. Nyrenstedt, R. Rajasegar, A. Varma, S. Singh, W. Northrop, A. Srna`,
    title: "Exploring the effects of varying pre-chamber geometry in a heavy-duty natural gas optically accessible engine under dilution conditions",
    journal: "SAE Technical Paper, 2025",
    link: "https://www.sae.org/publications/technical-papers/content/2025-01-8407/"
  },
  {
    id: "J05",
    authors: `C. Jiang, <u><b>A. Dhotre</b></u>, M. Lai, S. Biswas, J. MacDonald, I. Ekoto`,
    title: "On the modes of nanosecond pulsed plasmas for combustion ignition of quiescent CH₄-air mixtures",
    journal: "Journal of Physics D: Applied Physics, 2024",
    link: "https://iopscience.iop.org/article/10.1088/1361-6463/ad6876/meta"
  },
  {
    id: "J06",
    authors: `<u><b>A. Dhotre</b></u>, S. Biswas`,
    title: "A highly optical, controlled trajectory rapid compression and expansion machine for gas phase chemical physics research",
    journal: "Review of Scientific Instruments, 2024",
    link: "https://pubs.aip.org/aip/rsi/article/96/3/034902/3340223"
  },
  {
    id: "J07",
    authors: `V. Srinivasan, X. Tan, E. Whitely, I. Wright, <u><b>A. Dhotre</b></u>, J. Yang`,
    title: "Self-sustained oscillations in a low viscosity round jet",
    journal: "Physical Review Fluids, 2024",
    link: "https://journals.aps.org/prfluids/abstract/10.1103/PhysRevFluids.9.083902"
  },
  {
    id: "PR1",
    authors: `<u><b>A. Dhotre</b></u>, G. Nyrenstedt, R. Rajasegar, V. Duke, W. Northrop, A. Srna`,
    title: "Investigating the effects of nanosecond repetitive pulsed discharges in a pre-chamber assisted, heavy-duty, natural gas engine",
    journal: "In preparation for International Journal of Engine Research",
    // link: "#"
  },
  {
    id: "PR2",
    authors: `<u><b>A. Dhotre</b></u>, A. Fong, W. Northrop, D. Lacoste`,
    title: "Plasma-assisted pre-chamber combustion of ammonia-hydrogen mixtures in a constant volume combustion chamber",
    journal: "In preparation for Combustion Symposium, 2026",
    // link: "#"
  }
];

export const presentations = [
//   {
//     id: "C01",
//     title: "Machine Learning-Augmented Flame Front Detection in High-Speed Imaging",
//     event: "AIAA SciTech 2026",
//     role: "Presenter, upcoming"
//   },
  {
    id: "C02",
    title: "Plasma-Assisted Pre-Chamber Combustion in a Heavy-Duty, Natural Gas Engine",
    event: "SAE Powertrain, Fuels, and Lubricants 2025",
    role: "Presenter, upcoming"
  },
  {
    id: "C03",
    title: "Demonstration of Passive Pre-Chamber Combustion in a Fully Ammonia-Fueled Engine",
    event: "SAE Powertrain, Fuels, and Lubricants 2025",
    role: "Presenter, upcoming"
  },
  {
    id: "C04",
    title: "Exploring the Effects of Varying Pre-Chamber Geometry in a Heavy-Duty Natural Gas Optically Accessible Engine Under Dilution Conditions",
    event: "ASME ICE Forward 2024",
    role: "Poster, Presenter"
  },
  {
    id: "C05",
    title: "Ignition and Combustion Dynamics in an Optical Pre-Chamber in an RCEM",
    event: "SAE WCX 2024",
    role: "Presenter"
  },
  {
    id: "C06",
    title: "Investigating the Combustion Dynamics in an Optical Pre-Chamber with Varying Geometry",
    event: "Spring Technical Meeting of the Central States Section of The Combustion Institute 2024",
    role: "Prepared"
  },
  {
    id: "C07",
    title: "Investigation of Plasma-Assisted Combustion Using an Optical Pre-Chamber in an Optical Rapid Compression and Expansion Machine",
    event: "AEC Meeting Aug 2023",
    role: "Prepared"
  },
  {
    id: "C08",
    title: "Visualization of Methane/Air Pre-Chamber Combustion Using an Optical Pre-Chamber in a Rapid Compression and Expansion Machine",
    event: "ASME ICE Forward 2023",
    role: "Presenter"
  },
  {
    id: "C09",
    title: "Visualization of Compression Ignition of Dimethyl Ether in an Optical Rapid Compression and Expansion Machine",
    event: "13th US National Combustion Meeting",
    role: "Presenter"
  },
  {
    id: "C10",
    title: "Are Low Viscosity Jets Globally Unstable?",
    event: "APS Division of Fluid Dynamics 2021",
    role: "Presenter"
  },
  {
    id: "C11",
    title: "Effects of External Forcing on the Breakdown of Low Viscosity Jets",
    event: "APS Division of Fluid Dynamics 2020",
    role: "Presenter"
  },
  {
    id: "C12",
    title: "Synthesis and Characterization of Superparamagnetic Nanoparticles for Fuel Additives",
    event: "1st International Conference on Future Trends & Challenges in Mechanical Engineering",
    role: "Presenter"
  }
];
