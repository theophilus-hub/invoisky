import React from "react";

export function InvoicingAnalytics() {
  return (
    <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl font-bold leading-tight">
          Invoicing Simplified for
          <br />
          <span className="text-[#5754ff]">Freelancers and Businesses</span>
        </h2>
      </div>
      <div>
        <p className="text-sm">
          INVOISKY uses AI to automate invoice creation, detect errors, and provide intelligent insights. Our platform learns from your invoicing patterns to help you make better financial decisions.
        </p>
      </div>
    </section>
  );
}
