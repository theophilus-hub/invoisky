import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">What Our Customers Say</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied users who have transformed their invoicing process with INVOISKY
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Sarah Johnson" 
                    width={48} 
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Freelance Designer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "INVOISKY has completely transformed how I handle invoicing. The AI suggestions save me hours each week, and I love how it automatically reminds clients about payments. My cash flow has improved significantly!"
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Michael Chen" 
                    width={48} 
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As our startup grew, invoicing became a major headache. INVOISKY's automation and integration with our payment gateways has been a game-changer. The analytics help us understand our cash flow patterns better."
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Olivia Martinez" 
                    width={48} 
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Olivia Martinez</h4>
                  <p className="text-sm text-gray-500">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The customizable templates and branding options make our invoices look professional. The AI-powered error detection has caught several mistakes that would have been embarrassing. Worth every penny!"
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
