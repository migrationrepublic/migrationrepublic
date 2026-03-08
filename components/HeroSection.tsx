import { Plane, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

export function HeroSection() {
  const stats = [
    "Up to 2 Years Stay",
    "Family Members Can Join",
    "200+ Eligible Occupations",
    "From AUD $430 Government Fee"
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute top-40 left-0 -ml-32 w-[400px] h-[400px] bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 max-w-7xl">
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#012269] font-medium text-sm mb-6 shadow-sm">
            <Plane size={16} className="text-[#E40229]" />
            <span>Subclass 407</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#012269] leading-tight mb-6">
            Australia Training Visa <br/>
            <span className="text-[#E40229]">Complete 2025 Guide</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Planning to gain professional skills in Australia? The Australia Training Visa (Subclass 407) allows international professionals to undertake structured workplace training with an approved Australian sponsor. Whether you need licensing hours or want to enhance your skills, the 407 visa opens doors to world-class training opportunities in Australia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button href="https://migrationrepublic.com.au/book-a-consultation/" variant="accent" className="group text-lg px-8">
              Check Your Eligibility — Book a Consultation
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-2/5">
          <div className="bg-white/60 backdrop-blur-xl border border-gray-100 p-8 rounded-3xl shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-[#E40229] text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12">
              <span className="font-bold text-xl">2025</span>
              <span className="text-xs uppercase tracking-wider">Fast Track</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#012269] mb-6">Key Benefits</h3>
            <ul className="space-y-5">
              {stats.map((stat, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 w-6 h-6 mt-0.5" />
                  <span className="text-gray-700 font-medium text-lg leading-tight">{stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
