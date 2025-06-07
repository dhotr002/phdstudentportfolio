export const projects = [
	{
		id: 1,
		title: "Plasma-assisted pre-chamber combustion",
    slug: "plasma-prechamber", // used for routing
		highlights: [
			"Designed and operated an optical RCEM to study homogeneous (compression ignition) and heterogeneous (spark and plasma-assisted) combustion processes of renewable fuels such as natural gas, ammonia, DME.",
			"Studied nanosecond repetitive pulsed discharges (NRPD) in a pre-chamber in RCEM, CVCC, and single-cylinder engine" ,
      // "Implemented a nonlinear feedforward controller, repetitive controller, and iterative learning control (ILC) on a dSPACE real-time system for precise piston trajectory control."
    ],		
		imageUrl: "ct-rcem.png", // Place this image in /public/images/projects/
		date: "2021 – Present",
		collaborators: ["US Department of Energy","Sandia National Laboratories", "Carnegie Mellon University", "Colorado School of Mines"],
		link: "/projects/plasma-prechamber"
	},
	// {
	// 	id: 2,
	// 	title: "Plasma-assisted combustion in a constant volume combustion chamber (CVCC)",
	// 	highlights: [
	// 		"Studied the effects of nanosecond repetitive pulsed discharges (NRPD) on ignition kernel development of methane-air mixtures at engine-relevant conditions.",
  //     "Applied advanced optical diagnostics including multi-species chemiluminescence, Schlieren imaging, and optical emission spectroscopy (OES) to investigate NRPD ignition."
	// 	],
	// 	imageUrl: "cvcc.png", // add this image in /public/images/projects/
	// 	date: "2022 – Present",
	// 	collaborators: ["Sandia National Laboratories"],
	// 	link: "#"
	// },
	// {
	// 	id: 3,
	// 	title: "Pre-chamber assisted combustion in a heavy-duty natural gas engine",
	// 	highlights: ["Explored the effects of varying pre-chamber geometry on combustion dynamics of natural gas combustion at dilute conditions.",
  //     "Investigated the effects of NRPD on pre-chamber assisted combustion."
  //   ],
  //   imageUrl: "snl-engine.jpg", // add this image in /public/images/projects/
	// 	date: "Sep 2023 - Aug 2024",
	// 	collaborators: ["US Department of Energy","Sandia National Laboratories", "Carnegie Mellon University", "Colorado School of Mines"],
	// 	link: "#"
	// },
	{
		id: 4,
    title: 'NRPD ignition of ammonia mixtures in an active pre-chamber',
    slug: "nrpd-ammonia-prechamber",

    highlights: ["Set up a new experimental platform to study plasma-assisted ammonia combustion in an optical pre-chamber.",
      "Investigated the effects of nanosecond repetitive pulsed discharges on ammonia cracking and ignition using advanced optical and laser diagnostics (OH* chemiluminescence and NH-PLIF)."
    ],
    // description: "Researched methods to convert agricultural waste into biodegradable polymers, focusing on improving material properties for packaging applications.",
		imageUrl: "kaust-cvcc.jpg", // add this image in /public/images/projects/
		date: "Dec 2024 - Present",
		collaborators: ["King Abdullah University of Science and Technology (KAUST)"],
    link: "/projects/nrpd-ammonia-prechamber",

	},
	{
		id: 5,
		title: "Turbulent jet ignition in a fully ammonia-fueled engine",
    slug: "pc-ammonia",
    highlights: ["Demonstrated successful pre-chamber operation in a fully ammonia-fueled, single cylinder engine.",
      "Understanding the effects of pre-chamber geometry on combustion dynamics and emissions.",
    ],
    // description: "Investigated transition metal complexes as catalysts for electrochemical reduction of carbon dioxide to value-added chemicals, contributing to carbon capture utilization strategies.",
		imageUrl: "umn-engine.jpg", // add this image in /public/images/projects/
		date: "Dec 2024 - Present",
		collaborators: ["U.S. State of Minnesota Session Law"],
		link: "/projects/pc-ammonia"
	},
	{
		id: 41,
		title: "Breakdown and instability analysis of low viscosity jets",
    slug: "jets",
		highlights: ["Investigated instability and breakdown of low-viscosity jets under external forcing using hotwire anemometry and flow visualization (PIV and LIF) to enable design of controlled mixing systems and open-loop flow control strategies",],
    // description: "Developed modified activated carbon materials for efficient removal of heavy metals and organic pollutants from wastewater, with potential applications in rural water treatment.",
		imageUrl: "umn-jet.jpeg", // add this image in /public/images/projects/
		date: "Nov 2018 - Dec 2020",
		collaborators: ["Multiphase Transport Phenomena Lab"],
		link: "/projects/jets"
	},
];

export const contactInfo = {
	email: "dhotr002 [at] umn [dot] edu",
	phone: "+1 (612) 391-6170",
	address: "Minneapolis, MN, USA",
	socialMedia: {
		linkedin: "https://www.linkedin.com/in/akashdhotre/",
		twitter: "https://twitter.com",
		github: "https://github.com/dhotr002"
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
