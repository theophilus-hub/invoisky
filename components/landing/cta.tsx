import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#5754ff] to-[#ce53ff] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Invoicing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that have simplified their invoicing process with INVOISKY's AI-powered platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-[#5754ff] hover:bg-gray-100 px-8 py-3 text-lg font-medium">
            Start Your Free Trial
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
