import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <>
      {/* Product Update Banner */}
      <div className="container mx-auto mt-16 flex justify-center">
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm">
          New AI Features Available <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-8 text-center">
        <h1 className="text-5xl font-bold">AI-Powered Invoicing</h1>
        <h2 className="text-5xl font-bold mt-2 bg-gradient-to-r from-[#5754ff] to-[#ce53ff] text-transparent bg-clip-text">
          Simplified for Everyone
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          INVOISKY streamlines invoice management with AI-driven automation, intelligent recommendations, and powerful analytics for freelancers, startups, and SMEs.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Button className="bg-[#5754ff] text-white px-6 py-3 rounded-full hover:bg-[#4240e0] transition-colors">
            Get Started for free
          </Button>
          <Button variant="outline" className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
            Book a Demo
          </Button>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 mt-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-3xl blur-3xl -z-10"></div>
        <Image
          src="/placeholder.svg"
          alt="INVOISKY Dashboard Preview"
          width={1000}
          height={600}
          className="rounded-lg shadow-xl mx-auto"
          priority
        />
      </section>

      {/* Trusted By Section */}
      <section className="container mx-auto px-4 mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
        <div className="text-gray-400 font-bold text-xl md:text-2xl">Trusted by Freelancers</div>
        <div className="text-gray-400 font-bold text-xl md:text-2xl">Startups</div>
        <div className="text-gray-400 font-bold text-xl md:text-2xl">Small Businesses</div>
        <div className="text-gray-400 font-bold text-xl md:text-2xl">Agencies</div>
      </section>
    </>
  );
}
