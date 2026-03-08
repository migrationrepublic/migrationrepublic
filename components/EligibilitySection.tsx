import { ShieldCheck } from "lucide-react";
import { Button } from "./Button";

export function EligibilitySection() {
  const requirements = [
    "Must be at least 18 years of age",
    "Must be sponsored by an approved Australian organisation registered with the Department of Home Affairs",
    "Minimum 12 months full-time relevant work or study in your nominated occupation within the last 24 months",
    "Must demonstrate functional English — IELTS 4.5 or equivalent accepted",
    "Must meet Australian health and character requirements",
    "Must have no outstanding debt to the Australian Government",
    "Must have no history of visa refusal or cancellation (conditions apply)"
  ];

  return (
    <section id="eligibility" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-4">
            Who Can Apply for the Australia Training Visa?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Before applying for the Subclass 407 Training Visa, you must meet specific eligibility requirements set by the Australian Department of Home Affairs. Here is what you need to qualify.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 mb-12">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="text-[#E40229] w-6 h-6" />
                </div>
                <p className="text-gray-700 font-medium">{req}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center bg-[#012269] rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mx-20 -my-20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -mx-20 -my-20 blur-2xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Not sure if you qualify?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Our registered migration agents assess your case. Book a Consultation to find out your eligibility in minutes.
            </p>
            <Button href="https://migrationrepublic.com.au/book-a-consultation/" variant="accent" className="px-8 py-4 text-lg">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
