import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Stay updated with invoicing trends</h2>
        <p className="text-gray-600 mb-6">
          Get monthly tips, best practices, and updates on the latest invoicing features.
          <br />
          We respect your inbox—no spam, just valuable content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5754ff]"
          />
          <Button className="px-6 py-3 bg-[#5754ff] text-white font-medium rounded-lg hover:bg-[#4240e0]">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
