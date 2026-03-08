import { CheckCircle2, FileText } from "lucide-react";
import { Button } from "./Button";

export function HowToApplySection() {
  const steps = [
    {
      title: "Step 1 — Confirm Your Eligibility",
      desc: "Check your occupation, work experience, English proficiency, and which training stream applies to your situation before proceeding."
    },
    {
      title: "Step 2 — Find an Approved Sponsor",
      desc: "Your training must be conducted with an organisation approved by the Department of Home Affairs as a Temporary Activities Sponsor."
    },
    {
      title: "Step 3 — Sponsor Lodges Sponsorship Application",
      desc: "Your Australian sponsor applies for approval from the Department of Home Affairs. This step alone can take 1 to 2 months, so starting early is important."
    },
    {
      title: "Step 4 — Sponsor Submits Nomination",
      desc: "Once approved, your sponsor nominates you with a detailed training plan that clearly outlines your program objectives, training activities, and duration."
    },
    {
      title: "Step 5 — Lodge Your Visa Application",
      desc: "Submit your Subclass 407 visa application online through ImmiAccount along with all required supporting documents."
    },
    {
      title: "Step 6 — Complete Health & Character Checks",
      desc: "Attend your medical examination and gather police clearance certificates from every country you have lived in for 12 or more months."
    },
    {
      title: "Step 7 — Await Visa Decision",
      desc: "Around 50% of Training Visa applications are processed within 6 months. 90% of applications receive a decision within 13 months."
    }
  ];

  const docs = [
    "Valid passport",
    "Signed training plan from your sponsor",
    "Evidence of qualifications and relevant work experience",
    "English language test results (IELTS 4.5 or equivalent)",
    "Proof of Overseas Health Cover",
    "Police clearance certificates",
    "Recent passport-size photographs"
  ];

  return (
    <section id="how-to-apply" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-4">
            How to Apply for the Australia Training Visa — Step by Step
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Applying for the Subclass 407 Training Visa involves both you and your sponsoring organisation. Follow these steps to ensure a smooth and successful application.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-2/3">
            <div className="relative border-l-2 border-blue-200 ml-4 md:ml-6 space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="relative pl-8 md:pl-10 group">
                  <div className="absolute -left-[11px] top-1 bg-white border-4 border-[#012269] group-hover:border-[#E40229] transition-colors rounded-full w-5 h-5 flex items-center justify-center"></div>
                  <h3 className="text-xl font-bold text-[#012269] mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-[#012269] text-white p-8 rounded-2xl shadow-xl sticky top-28 border border-blue-900">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-[#E40229] w-8 h-8" />
                <h3 className="text-2xl font-bold">Documents Required</h3>
              </div>
              <ul className="space-y-4">
                {docs.map((doc, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="text-[#E40229] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-50 font-medium leading-tight">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
          <p className="text-xl text-[#012269] font-medium mb-6">
            Let Migration Republic manage your entire application — from sponsor to visa grant.
          </p>
          <Button href="https://migrationrepublic.com.au/book-a-consultation/" variant="accent" className="px-8 py-4 text-lg">
            Talk to an Agent →
          </Button>
        </div>
      </div>
    </section>
  );
}
