import React from "react";

export function GrowthMetrics() {
  const metrics = [
    {
      value: "$2.5M",
      label: "Invoice Volume Processed"
    },
    {
      value: "75%",
      label: "Error Reduction"
    },
    {
      value: "10k+",
      label: "Active Users"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h2 className="text-3xl font-bold leading-tight">
          Transforming
          <br />
          Invoicing
        </h2>
        <p className="text-sm text-[#7a7a7a] mt-2">
          Join thousands of businesses streamlining their invoicing process with INVOISKY.
        </p>
      </div>

      {metrics.map((metric, i) => (
        <div key={i}>
          <h3 className="text-3xl font-bold text-[#5754ff]">{metric.value}</h3>
          <p className="text-sm text-[#7a7a7a]">{metric.label}</p>
        </div>
      ))}
    </section>
  );
}
