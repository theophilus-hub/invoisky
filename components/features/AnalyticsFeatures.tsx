import React from "react";
import Image from "next/image";

export function AnalyticsFeatures() {
  return (
    <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Real-Time Invoice Insights */}
      <div className="bg-[#f6f6f6] rounded-lg p-6">
        <h3 className="font-bold text-xl mb-2">Real-Time Invoice Insights</h3>
        <p className="text-sm text-[#7a7a7a] mb-4">
          Monitor your invoicing performance with predictive analytics and smart recommendations.
        </p>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex justify-between mb-2">
            <h4 className="text-sm font-medium">Monthly Revenue Insights</h4>
            <span className="text-xs text-[#7a7a7a]">Export</span>
          </div>
          <div className="h-40 relative">
            <Image
              src="/placeholder.svg"
              alt="Line chart showing monthly revenue"
              width={300}
              height={160}
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h4 className="text-sm font-medium mb-2">
            Analyze.
            <br />
            Optimize.
            <br />
            Grow.
          </h4>
          <div className="h-32 relative">
            <Image
              src="/placeholder.svg"
              alt="Line chart showing growth metrics"
              width={240}
              height={128}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Client Retention */}
      <div className="bg-[#f6f6f6] rounded-lg p-6">
        <div className="bg-white rounded-lg p-4 mb-4">
          <p className="text-xs text-[#7a7a7a]">On average our users have seen +25% improvement in payment collection</p>
          <div className="h-32 relative mt-4">
            <Image
              src="/placeholder.svg"
              alt="Payment collection chart"
              width={240}
              height={128}
              className="object-contain"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-[#7a7a7a] mb-2">Last 30 days</p>
          <p className="text-sm text-[#5754ff] font-medium mb-4">Client Payment Analytics</p>

          <div className="flex gap-2 mb-2">
            <span className="bg-[#5754ff] text-white text-xs px-3 py-1 rounded-full">+15.5%</span>
            <span className="bg-[#f1f1f1] text-xs px-3 py-1 rounded-full">Payment Rate</span>
          </div>

          <div className="flex gap-2">
            <span className="bg-[#5754ff] text-white text-xs px-3 py-1 rounded-full">-3 days</span>
            <span className="bg-[#f1f1f1] text-xs px-3 py-1 rounded-full">Payment Time</span>
          </div>
        </div>

        <div className="relative h-24">
          <Image
            src="/placeholder.svg"
            alt="Upward trend arrow"
            width={240}
            height={96}
            className="object-contain"
          />
        </div>

        <div>
          <h4 className="font-bold text-lg mb-1">Relationships, not transactions</h4>
          <p className="text-sm text-[#7a7a7a]">Build stronger client relationships with personalized invoicing.</p>
        </div>
      </div>

      {/* Smart Features */}
      <div className="space-y-6">
        <div className="bg-[#f6f6f6] rounded-lg p-6">
          <h3 className="font-bold text-xl mb-4">AI-Powered Recommendations</h3>
          <div className="bg-white rounded-lg p-4">
            <div className="grid grid-cols-3 text-sm mb-4">
              <span>Feature</span>
              <span>Impact</span>
              <span>Adoption</span>
            </div>
            <div className="space-y-4">
              <div className="h-16 relative">
                <Image
                  src="/placeholder.svg"
                  alt="Smart line items chart"
                  width={300}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="h-16 relative">
                <Image
                  src="/placeholder.svg"
                  alt="Payment reminders chart"
                  width={300}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f6f6f6] rounded-lg p-6">
          <h3 className="font-bold text-xl mb-4">Business Insights</h3>
          <div>
            <h4 className="text-sm font-medium mb-2">Client Spending Patterns</h4>
            <div className="h-40 relative">
              <Image
                src="/placeholder.svg"
                alt="Bar chart showing client spending patterns"
                width={300}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
