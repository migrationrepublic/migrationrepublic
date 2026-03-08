import { Button } from "./Button";

export function FinalCTASection() {
  return (
    <section className="py-24 bg-[#012269] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-[#E40229] rounded-full blur-[120px] transform rotate-45"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[150%] bg-blue-400 rounded-full blur-[120px] transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Apply for Your Australia Training Visa?
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Migration Republic's registered migration agents specialise in Australian Training Visa applications. From eligibility assessment to visa grant, we handle every step of the process so you can focus on your future in Australia.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button href="https://migrationrepublic.com.au/book-a-consultation/" variant="accent" className="px-10 py-5 text-lg sm:text-xl">
            Book a Consultation →
          </Button>
          <Button href="https://migrationrepublic.com.au/book-a-consultation/" variant="outline" className="px-10 py-5 text-lg sm:text-xl border-white text-white hover:bg-white/10">
            Talk to an Agent →
          </Button>
        </div>
      </div>
    </section>
  );
}
