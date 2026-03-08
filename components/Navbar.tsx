"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "./Button";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Eligibility", href: "#eligibility" },
    { name: "Training Types", href: "#training-types" },
    { name: "Cost & Fees", href: "#cost-fees" },
    { name: "How to Apply", href: "#how-to-apply" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="border-2 rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-[#E40229] font-medium transition-colors text-sm lg:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button
              href="https://migrationrepublic.com.au/book-a-consultation/"
              variant="accent"
              className="px-5 py-2"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#012269] hover:text-[#E40229] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 absolute w-full pb-6 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#E40229] hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Button
                href="https://migrationrepublic.com.au/book-a-consultation/"
                variant="accent"
                className="w-full"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
