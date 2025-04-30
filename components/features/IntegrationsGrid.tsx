import React from "react";
import Image from "next/image";

export function IntegrationsGrid() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-2">
        Seamlessly Connect Your
        <br />
        <span className="text-[#5754ff]">Business Tools</span>
      </h2>
      <p className="max-w-2xl mx-auto text-sm text-[#7a7a7a]">
        INVOISKY integrates with your favorite business tools to streamline your workflow, from accounting software to payment gateways.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">
        {integrationTools.map((tool, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-[#f6f6f6] rounded-lg mb-4 flex items-center justify-center">
              <Image 
                src="/placeholder.svg" 
                alt={tool.name} 
                width={40} 
                height={40}
                className="opacity-70"
              />
            </div>
            <p className="text-xs text-[#7a7a7a] text-center">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const integrationTools = [
  { name: "QuickBooks" },
  { name: "Xero" },
  { name: "Stripe" },
  { name: "PayPal" },
  { name: "Paystack" },
  { name: "Korapay" },
  { name: "Flutter" },
  { name: "Slack" },
  { name: "Gmail" },
  { name: "Google Drive" }
];
