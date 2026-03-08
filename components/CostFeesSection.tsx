import { Info } from "lucide-react";
import { Button } from "./Button";

export function CostFeesSection() {
  const fees = [
    { applicant: "Main Applicant", cost: "$430", type: "Government Fee (AUD)" },
    { applicant: "Additional Applicant 18+", cost: "$430 each", type: "Government Fee (AUD)" },
    { applicant: "Additional Applicant Under 18", cost: "$110", type: "Government Fee (AUD)" },
    { applicant: "Sponsorship Application Fee", cost: "~$420", type: "Sponsor Cost" },
    { applicant: "Nomination Fee", cost: "~$330", type: "Sponsor Cost" },
    { applicant: "Subsequent Temporary Application", cost: "$700", type: "If applicable" }
  ];

  return (
    <section id="cost-fees" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-4">
            Australia Training Visa Cost & Fees 2025
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding the full cost of your Australia Training Visa application helps you plan ahead. Below is a complete breakdown of government fees for the Subclass 407 visa in 2025.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#012269] text-white">
                  <th className="py-4 px-6 font-semibold">Applicant / Item</th>
                  <th className="py-4 px-6 font-semibold text-right">Fee (AUD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {fees.map((fee, index) => (
                  <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900 block">{fee.applicant}</span>
                      <span className="text-sm text-gray-500">{fee.type}</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-[#012269] text-right">{fee.cost}</td>
                  </tr>
                ))}
                <tr className="bg-blue-50">
                  <td className="py-5 px-6 font-bold text-[#012269] text-lg">Estimated Total (Single Applicant)</td>
                  <td className="py-5 px-6 font-bold text-[#E40229] text-xl text-right">AUD $1,500+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#012269] mb-6">Additional Costs to Budget For</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#E40229]"></div> Medical examination fees</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#E40229]"></div> Police clearance certificates</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#E40229]"></div> Overseas Health Cover (mandatory)</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#E40229]"></div> Document translation and certification</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#E40229]"></div> Migration agent professional fees</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 relative shadow-sm">
            <div className="absolute -top-5 -left-5 bg-white p-3 rounded-full shadow-lg border border-gray-100">
              <Info className="text-[#012269] w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#012269] text-xl mb-4 mt-2">Pro Tip</h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              The total cost varies depending on your family size, sponsor situation, and individual circumstances. Contact Migration Republic for an accurate cost estimate tailored to your case.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button href="https://migrationrepublic.com.au/book-a-consultation/" variant="accent" className="px-8 py-4 text-lg">
            Get an exact cost estimate — Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
