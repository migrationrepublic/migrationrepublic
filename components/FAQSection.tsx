"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircleQuestion } from "lucide-react";
import { Button } from "./Button";

export function FAQSection() {
  const faqs = [
    {
      q: "Can I work while on the Australia Training Visa?",
      a: "Holders of the Subclass 407 visa may only work in activities directly related to their approved training program under Condition 8102. Dependent family members accompanying the visa holder are permitted to work up to 40 hours per fortnight."
    },
    {
      q: "Does the 407 visa lead to permanent residency in Australia?",
      a: "The Subclass 407 Training Visa does not offer a direct pathway to permanent residency. However, the professional skills and Australian work experience gained during your training may significantly strengthen future permanent visa applications. Our agents can advise on the best long-term migration pathway for your situation."
    },
    {
      q: "Can my family members come with me to Australia?",
      a: "Yes. Eligible family members may be included in your Training Visa application and can accompany you to Australia. They are free to travel in and out of Australia throughout your visa period."
    },
    {
      q: "Is there an age limit for the Training Visa?",
      a: "Applicants must be a minimum of 18 years old. There is no maximum age limit for the Subclass 407 Training Visa."
    },
    {
      q: "Can I self-sponsor for the Subclass 407 visa?",
      a: "No. You cannot self-sponsor for the 407 Training Visa. Your training must be conducted with and nominated by an Australian organisation that holds formal approval from the Department of Home Affairs as a Temporary Activities Sponsor."
    },
    {
      q: "How long does 407 visa processing take?",
      a: "Processing times for the Subclass 407 Training Visa typically range from 6 to 13 months. Submitting a complete and accurate application along with all required documents is the most effective way to avoid unnecessary delays."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <MessageCircleQuestion className="w-12 h-12 text-[#E40229]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#012269] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Have questions about the 407 Training Visa? Here are the most common questions we receive from applicants.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border ${openIndex === index ? 'border-[#012269]' : 'border-gray-200'} shadow-sm overflow-hidden transition-all duration-300`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg pr-8 ${openIndex === index ? 'text-[#012269]' : 'text-gray-800'}`}>
                  {faq.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#E40229] w-6 h-6 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 w-6 h-6 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center">
          <p className="text-xl text-[#012269] font-medium mb-6">
            Still have questions? 
          </p>
          <Button href="https://migrationrepublic.com.au/book-a-consultation/" variant="primary" className="px-8 py-4 text-lg bg-white border border-[#012269] !text-[#012269] hover:!bg-blue-50">
            Talk to a registered migration agent today — it is free.
          </Button>
        </div>
      </div>
    </section>
  );
}
