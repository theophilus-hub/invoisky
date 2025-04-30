import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Simple, Transparent Pricing</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the plan that works best for your business needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <Card className="border-2 border-gray-200 hover:border-[#5754ff] transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <CardDescription>Perfect for freelancers and individuals</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Up to 20 invoices per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic invoice templates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>PDF export</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Email notifications</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Single payment gateway</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#5754ff] hover:bg-[#4240e0]">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Professional Plan */}
          <Card className="border-2 border-[#5754ff] shadow-lg relative">
            <div className="absolute top-0 right-0 bg-[#5754ff] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <CardDescription>Ideal for small businesses and startups</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited invoices</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Advanced customizable templates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>AI-powered suggestions</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Multiple payment gateways</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Client management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic analytics</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#5754ff] hover:bg-[#4240e0]">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border-2 border-gray-200 hover:border-[#5754ff] transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For growing teams and businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Advanced AI analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Custom branding</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#5754ff] hover:bg-[#4240e0]">Get Started</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
