import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#5754ff] flex items-center justify-center text-white font-bold">
          I
        </div>
        <span className="font-bold">INVOISKY</span>
        <span className="text-xs text-gray-500">AI-Powered Invoicing</span>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link href="#features" className="text-sm hover:text-[#5754ff] transition-colors">
          Features
        </Link>
        <Link href="#pricing" className="text-sm hover:text-[#5754ff] transition-colors">
          Pricing
        </Link>
        <Link href="#testimonials" className="text-sm hover:text-[#5754ff] transition-colors">
          Testimonials
        </Link>
        <Link href="#faq" className="text-sm hover:text-[#5754ff] transition-colors">
          FAQ
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm hover:text-[#5754ff] transition-colors">
          Log In
        </Link>
        <Button className="bg-[#5754ff] text-white px-4 py-2 rounded-full text-sm hover:bg-[#4240e0] transition-colors">
          Get Started
        </Button>
      </div>
    </header>
  );
}
