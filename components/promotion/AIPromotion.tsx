import React from "react";
import { Button } from "@/components/ui/button";

export function AIPromotion() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Invoicing,
            <br />
            Streamline Your Business with
            <br />
            <span className="text-[#5754ff]">AI-Powered Automation</span>
          </h2>
          <Button className="mt-8 px-8 py-3 bg-[#5754ff] text-white font-medium rounded-full hover:bg-[#4240e0]">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}
