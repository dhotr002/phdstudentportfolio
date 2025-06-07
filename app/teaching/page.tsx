import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';

export default function TeachingPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="Teaching"
          description="My experience in teaching and mentoring across mechanical engineering."
        />

        {/* TEACHING AREAS */}
        {/* <h2 className="text-xl font-bold mt-10 mb-4 tracking-wide">Teaching Areas</h2> */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: 'Hydraulics', years: '1 year', color: 'bg-yellow-400' },
            { label: 'Thermodynamics, Heat & Mass Transfer', years: '4+ years', color: 'bg-red-400' },
            { label: 'Experimental Techniques, Statistics', years: '5+ years', color: 'bg-blue-400' },
            { label: 'Reacting Flow, Combustion', years: '4+ years', color: 'bg-gray-800 text-white' },
            { label: 'CFD', years: '2+ years of experience', color: 'bg-gray-700 text-white' },
            { label: 'Spectroscopy & Laser Diagnostics', years: '2+ years of experience', color: 'bg-orange-300' },
          ].map((area, i) => (
            <div
              key={i}
              className={`p-4 rounded shadow-sm ${area.color} text-center font-semibold`}
            >
              {area.label}
              <div className="text-sm font-normal mt-1">{area.years} of experience</div>
            </div>
          ))}
        </div>

        {/* TEACHING EXPERIENCE */}
        <h2 className="text-xl font-bold mt-12 mb-4 tracking-wide">Teaching Experience</h2>

        <div className="space-y-8">
          {/* Example Card */}
          <div className="border p-6 rounded bg-background">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold italic">Graduate Teaching Assistant</h3>
                <p className="text-sm mb-2 text-muted-foreground">
                  University of Minnesota, Twin Cities
                </p>
                <div>
                  {/* <p className="font-semibold">Graduate Level Courses</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Advanced Rocket Propulsion</li>
                    <li>Air Breathing Propulsion</li>
                    <li>Aerospace Propulsion Systems</li>
                    <li>Rocket Propulsion</li>
                  </ul> */}
                  <p className="mt-2 font-semibold">Fluid Power and Controls Laboratory</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Guided students in implementing hydraulic circuits on the wet bench and designing/building various controllers (e.g., PID, internal model-based controller) to track input signals using MATLAB Simulink.</li>
                  </ul>
                  <p className="mt-2 font-semibold">Thermodynamics</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Assisted in teaching thermodynamics concepts, including the laws of thermodynamics, heat transfer, and energy conversion.</li>
                    <li>Conducted weekly office hours to support students with course material and assignments for a class of 150 students.</li>
                  </ul>
                  <p className="mt-2 font-semibold">Basic Measurements Laboratory</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Guided students on statistical estimates of experimental uncertainty, calibration techniques, and signal conditioning.</li>
                    <li>Instructed students on using various transducers for mechanical measurements and supervised hands-on exploration of temperature, pressure, humidity, stress-strain, force, velocity, and flow/radiative sensors using LabVIEW.</li>
                  </ul>
                </div>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/University_of_Minnesota_Logo.svg" // adjust this to your path
                alt="UMN Logo"
                className="h-12 object-contain ml-4"
              />
            </div>
            {/* <p className="text-sm mt-2 text-right">2012 – 2017</p> */}
          </div>

          {/* Add more teaching roles here... */}
        </div>


        <div className="space-y-8">
          {/* Card 2 */}
          <div className="border p-6 rounded bg-background">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold italic">Research Experience for Undergrads (REU) Mentor</h3>
                <p className="text-sm mb-2 text-muted-foreground">
                  University of Minnesota, Twin Cities
                </p>
                <div>
                  {/* <p className="mt-2 font-semibold">Fluid Power and Controls Laboratory</p> */}
                  <ul className="list-disc list-inside text-sm">
                    <li>Participated as a graduate mentor for talented undergraduate students pursuing a 10-week research program on clean combustion of renewable fuels and superparamagnetic nanoparticles in energy applications.</li>
                  </ul>
                </div>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/University_of_Minnesota_Logo.svg" // adjust this to your path
                alt="UMN Logo"
                className="h-12 object-contain ml-4"
              />
            </div>
            {/* <p className="text-sm mt-2 text-right">2012 – 2017</p> */}
          </div>

          {/* Add more teaching roles here... */}
        </div>
      </SectionContainer>
    </div>
  );
}
