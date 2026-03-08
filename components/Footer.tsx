import { Plane } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Plane
              className="text-[#E40229] group-hover:text-white transition-colors"
              size={24}
            />
            <span className="font-bold text-xl text-white">
              Migration Republic
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link
              href="#eligibility"
              className="hover:text-white transition-colors"
            >
              Eligibility
            </Link>
            <Link
              href="#training-types"
              className="hover:text-white transition-colors"
            >
              Training Types
            </Link>
            <Link
              href="#cost-fees"
              className="hover:text-white transition-colors"
            >
              Cost & Fees
            </Link>
            <Link href="#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Migration Republic. All rights reserved.</p>
          <p className="text-center md:text-right text-gray-500">
            Information provided on this page is for general guidance. Consult
            with our registered migration agents for personalized advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
