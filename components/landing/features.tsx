import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Features() {
  return (
    <div className="py-16">
      {/* Features Intro */}
      <section className="container mx-auto px-4 mt-24 text-center">
        <h2 className="text-4xl font-bold">Simplify Your Invoicing with</h2>
        <h3 className="text-4xl font-bold mt-2 bg-gradient-to-r from-[#5754ff] to-[#ce53ff] text-transparent bg-clip-text">
          AI-Powered Features
        </h3>
      </section>

      {/* Invoice Generation Feature */}
      <section className="container mx-auto px-4 mt-24 grid md:grid-cols-2 gap-16">
        {/* Left Column - Image */}
        <div>
          <Image
            src="/placeholder.svg"
            alt="Invoice Generation"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column - Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold">Smart Invoice Generation</h3>
          <p className="mt-4 text-gray-600">
            Create professional invoices in seconds with our AI-powered system. Customize templates, 
            automate recurring billing, and export to PDF with just a few clicks. Our intelligent 
            system detects errors and provides suggestions to ensure accuracy.
          </p>
          <div className="mt-6">
            <Button variant="outline" className="bg-black text-white px-4 py-2 rounded-md inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Integration Feature */}
      <section className="container mx-auto px-4 mt-24 grid md:grid-cols-2 gap-16">
        {/* Left Column - Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold">Seamless Payment Integration</h3>
          <p className="mt-4 text-gray-600">
            Accept payments through multiple gateways including Korapay, Paystack, Flutter, and Stripe.
            Track payment status in real-time and receive instant notifications when clients pay.
            Our system ensures secure transaction processing and simplifies reconciliation.
          </p>
          <div className="mt-6">
            <Button variant="outline" className="bg-black text-white px-4 py-2 rounded-md inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div>
          <Image
            src="/placeholder.svg"
            alt="Payment Integration"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* AI Enhancements Feature */}
      <section className="container mx-auto px-4 mt-24 grid md:grid-cols-2 gap-16 mb-24">
        {/* Left Column - Image */}
        <div>
          <Image
            src="/placeholder.svg"
            alt="AI Analytics"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column - Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold">Intelligent Business Insights</h3>
          <p className="mt-4 text-gray-600">
            Leverage AI-powered analytics to gain valuable insights into your business. 
            Get smart recommendations for line items, predict cash flow trends, and 
            automate reminders with adaptive messaging based on client behavior.
            Make data-driven decisions to grow your business.
          </p>
          <div className="mt-6">
            <Button variant="outline" className="bg-black text-white px-4 py-2 rounded-md inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
