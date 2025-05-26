import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';

export default function TeachingPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="Teaching"
          description="My experience in teaching and mentoring across aerospace and combustion disciplines."
        />

        {/* TEACHING AREAS */}
        <h2 className="text-xl font-bold mt-10 mb-4 uppercase tracking-wide">Teaching Areas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: 'Plasma Physics', years: '3+ years', color: 'bg-yellow-400' },
            { label: 'Turbulence & Fluids', years: '10+ years', color: 'bg-red-400' },
            { label: 'Rocket & Air-breathing Propulsion', years: '7+ years', color: 'bg-blue-400' },
            { label: 'Supersonic & Hypersonic Flows', years: '7+ years', color: 'bg-green-300' },
            { label: 'Heat & Mass Transfer, Thermodynamics', years: '11+ years', color: 'bg-gray-800 text-white' },
            { label: 'Reacting Flow, Combustion', years: '11+ years', color: 'bg-lime-300' },
            { label: 'CFD', years: '10+ years', color: 'bg-gray-700 text-white' },
            { label: 'Spectroscopy & Laser Diagnostics', years: '10+ years', color: 'bg-orange-300' },
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
        <h2 className="text-xl font-bold mt-12 mb-4 uppercase tracking-wide">Teaching Experience</h2>

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
                  <p className="font-semibold">Graduate Level Courses</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Advanced Rocket Propulsion</li>
                    <li>Air Breathing Propulsion</li>
                    <li>Aerospace Propulsion Systems</li>
                    <li>Rocket Propulsion</li>
                  </ul>
                  <p className="mt-2 font-semibold">Undergraduate Level Courses</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Aerospace Propulsion</li>
                    <li>Rocket Propulsion</li>
                  </ul>
                </div>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Minnesota_Logo.svg/2560px-University_of_Minnesota_Logo.svg.png" // adjust this to your path
                alt="UMN Logo"
                className="h-12 object-contain ml-4"
              />
            </div>
            <p className="text-sm mt-2 text-right">2012 – 2017</p>
          </div>

          {/* Add more teaching roles here... */}
        </div>
      </SectionContainer>
    </div>
  );
}
