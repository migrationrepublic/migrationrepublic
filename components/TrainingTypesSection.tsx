import { Briefcase, GraduationCap, Building2 } from "lucide-react";
import { Button } from "./Button";

export function TrainingTypesSection() {
  const streams = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#E40229]" />,
      title: "Stream 1 — Occupational Training for Registration",
      description: "For professionals who need supervised workplace hours in Australia to obtain formal registration or licensing in their field. Ideal for regulated professions requiring mandatory supervised practice.",
      example: "An overseas nurse completing supervised clinical hours required for AHPRA registration."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#E40229]" />,
      title: "Stream 2 — Structured Training to Enhance Skills",
      description: "Designed for experienced professionals who want to upskill in an eligible occupation through structured on-the-job training in Australia (min 30 hrs/week, 70% practical).",
      example: "A marketing manager from overseas completing a structured training program with an Australian firm to learn advanced local market strategies."
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#E40229]" />,
      title: "Stream 3 — Government Supported & Prof. Dev.",
      description: "Allows individuals to undertake structured training that is supported by an Australian government agency, or overseas businesses sending staff for development programs.",
      example: "A multinational company sending a senior manager to its Australian headquarters for a structured leadership development program."
    }
  ];

  return (
    <section id="training-types" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-4">
            3 Types of Training Under the Subclass 407 Visa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Australia Training Visa covers three distinct training streams. You must qualify under at least one stream to be eligible for the 407 visa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {streams.map((stream, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:bg-red-100 transition-colors"></div>
              
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform">
                {stream.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#012269] mb-4 relative z-10">
                {stream.title}
              </h3>
              
              <p className="text-gray-600 mb-6 relative z-10 flex-grow">
                {stream.description}
              </p>
              
              <div className="bg-blue-50 p-4 rounded-xl relative z-10">
                <span className="text-sm font-bold text-[#012269] block mb-2">Example:</span>
                <p className="text-sm text-gray-700 italic">"{stream.example}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-[#012269] font-medium mb-6">
            Which stream applies to you?
          </p>
          <Button href="https://migrationrepublic.com.au/book-a-consultation/" className="px-8 py-4 text-lg">
            Let our expert agents decide in 15 minutes →
          </Button>
        </div>
      </div>
    </section>
  );
}
