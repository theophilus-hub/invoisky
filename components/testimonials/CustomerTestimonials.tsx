import React from "react";

export function CustomerTestimonials() {
  const testimonials = [
    {
      quote: "INVOISKY's AI-powered invoice generation has cut our billing time by 70%. The error detection feature has saved us from countless embarrassing mistakes.",
      name: "Sarah Johnson",
      title: "Freelance Designer",
      company: "Creative Solutions",
    },
    {
      quote: "The analytics dashboard gives me insights into my business I never had before. I can see which clients pay on time and which services are most profitable.",
      name: "Michael Chen",
      title: "Agency Owner",
      company: "Digital Spark",
    },
    {
      quote: "Integrating INVOISKY with our payment gateways was seamless. Our cash flow has improved dramatically since we started using the automated reminder system.",
      name: "Olivia Martinez",
      title: "Finance Director",
      company: "TechStart Inc.",
    },
  ];

  const featuredTestimonials = [
    {
      quote: "The customizable templates make our invoices look professional and on-brand. The AI suggestions for line items are surprisingly accurate and save us time.",
      name: "David Wilson",
      title: "Operations Manager",
      company: "BuildRight Construction",
    },
    {
      quote: "As our startup grew, INVOISKY scaled with us. The team collaboration features made it easy to bring our accounting department on board.",
      name: "Emma Thompson",
      title: "Startup Founder",
      company: "EcoGoods",
    },
    {
      quote: "INVOISKY transformed our invoicing process with smart automation and insightful analytics that help us make better business decisions.",
      name: "James Rodriguez",
      title: "CFO",
      company: "MediTech",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">
        Trusted by
        <br />
        over <span className="text-[#5754ff]">10,000+ Businesses</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-white border border-[#f1f1f1] rounded-lg p-6 shadow-sm">
            <p className="text-sm mb-4">{testimonial.quote}</p>
            <div className="flex items-center">
              <div>
                <p className="font-bold text-sm">
                  {testimonial.name}, <span className="font-normal">{testimonial.title}</span>
                </p>
                <div className="flex items-center mt-2">
                  <div className="w-5 h-5 rounded-full bg-[#f1f1f1] mr-2"></div>
                  <span className="text-xs">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#f6f6f6] rounded-lg p-6">
        {featuredTestimonials.map((testimonial, i) => (
          <div key={i} className="bg-white border border-[#f1f1f1] rounded-lg p-6 shadow-sm">
            <p className="text-sm mb-4">{testimonial.quote}</p>
            <div className="flex items-center">
              <div>
                <p className="font-bold text-sm">
                  {testimonial.name}, <span className="font-normal">{testimonial.title}</span>
                </p>
                <div className="flex items-center mt-2">
                  <div className="w-5 h-5 rounded-full bg-[#f1f1f1] mr-2"></div>
                  <span className="text-xs">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
