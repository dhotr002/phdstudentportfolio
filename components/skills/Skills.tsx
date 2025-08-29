export default function Skills() {
  const categories = [
    {
      title: "Experimental & Diagnostics",
      skills: [
        "PLIF", "Schlieren", "Chemiluminescence", "PIV",
        "Spectroscopy", "Plasma Chemistry", "XRD", "SEM", "VSM", "Rheometry",
        "Hotwire Anemometry", "Electronics",
        "Design of Experiments", "Data Analysis", "Uncertainty Analysis","Image Processing",
       ],
    },
    {
      title: "Design & Simulation",
      skills: [
        "MATLAB","Simulink","ANSYS Fluent", "Zemax OpticStudio", "CHEMKIN", "LIFBASE", "Specair", "BOLSIG+",
        "Converge CFD", "Autodesk CFD", "Nastran In-CAD",
        "SolidWorks", "AutoCAD", "Pro-E", "CATIA",
        "FEA",
        "Cantera"
      ],
    },
    {
      title: "Software & Control",
      skills: [
        "MATLAB", "Simulink", "LabVIEW", "FORTRAN",
        "KIVA", "Python", "R", "GitHub",
        "dSPACE",
        "Digital Signal Processing",
        "Optimal & Robust Control",
        "NI DAQ", "Automation", "LaTeX"
      ],
    },
    {
      title: "Fabrication",
      skills: [
        "CNC Machining",
        "TIG Welding",
        "Laser Cutter",
        "Sheet Metal",
        "Grinding",
        "Inspection","Design FMEA", "GD&T"
      ],
    },
    
  ];

  return (
    <section className="pt-16 pb-0">
      <h2 className="text-4xl font-extrabold text-center mb-4">Technical Skills</h2>
      <p className="text-center text-muted-foreground mb-12">
        Comprehensive expertise across the mechanical engineering workflow, from initial concept to final production.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.title}
            className="p-6 border rounded-2xl shadow-sm bg-card"
          >
            <h3 className="text-xl font-semibold text-center mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-muted hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
