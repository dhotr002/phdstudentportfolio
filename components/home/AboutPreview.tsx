import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  const previewSkills = [
  "Thermo-fluids","Combustion", "Plasmas","Optical & Laser Diagnostics","PLIF", "Schlieren", "Spectroscopy", "CFD (Fluent, Converge, Fortran)",
  "SolidWorks", "MATLAB","Simulink", "Image Processing", "Design of Experiments"
];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Photo */}
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        <Image
          src="/saephoto.jpg"
          alt="Akash Dhotre"
          width={600}
          height={800}
          className="object-cover w-full h-[400px]"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
          <h3 className="text-lg font-semibold">Akash Dhotre</h3>
          <p className="text-muted-foreground">PhD Candidate in Mechanical Engineering</p>
        </div>
      </div>

      {/* Condensed text + skills */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-muted-foreground">
          PhD candidate in Mechanical Engineering with 6+ years of experience in mechanical and thermal system design, 
          advanced combustion, and plasmas. Experienced in optical & laser diagnostics, CFD/FEA simulations, CAD design,
           and development of custom experimental platforms. Proven track record of publications, presentations, and collaborations 
           across national labs, industry, and academia. Passionate about applying thermodynamics and heat transfer fundamentals to 
           design and optimize high-performance thermofluidic & reacting flow systems and next-generation technologies.
        </p>

        {/* Skills preview */}
        <div className="flex flex-wrap gap-2">
          {previewSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-md text-sm font-medium bg-muted hover:bg-primary/10 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        <Link
          href="/about"
          className="inline-block text-primary hover:text-primary/80 transition-colors"
        >
          View full skills & bio →
        </Link>
      </div>
    </div>
  );
}
