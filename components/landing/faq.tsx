import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to know about INVOISKY
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                How does INVOISKY's AI technology improve invoicing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                INVOISKY uses AI to automate invoice creation, detect errors, provide smart recommendations for line items, 
                and optimize payment reminders based on client behavior. Our AI also analyzes your invoicing patterns to 
                provide valuable business insights and predictive analytics to help you make better financial decisions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                What payment gateways does INVOISKY support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                INVOISKY integrates with multiple payment gateways including local options like Korapay, Paystack, and Flutter, 
                as well as international options like Stripe. This allows your clients to pay using their preferred method, 
                improving your payment collection rate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Can I customize my invoice templates?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely! INVOISKY offers fully customizable invoice templates that you can tailor to match your brand. 
                You can add your logo, change colors, adjust layouts, and create multiple templates for different clients 
                or services. The Professional and Enterprise plans offer more advanced customization options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                Is INVOISKY suitable for my industry?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                INVOISKY is designed to work for a wide range of industries including creative services, consulting, 
                IT, construction, healthcare, and more. The flexible nature of our platform allows you to adapt it to 
                your specific industry needs, and our AI learns from your usage to provide more relevant suggestions over time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                How secure is my financial data with INVOISKY?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Security is our top priority. INVOISKY employs bank-level encryption for all data, strict tenant isolation 
                for multi-tenancy, regular security audits, and GDPR compliance. We never store sensitive payment information 
                directly - all payment processing is handled securely through our certified payment gateway partners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">
                Can multiple team members use INVOISKY?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, our Enterprise plan supports team collaboration with role-based access control. You can add team members 
                with different permission levels, allowing you to control who can create invoices, process payments, 
                access reports, and manage clients. This makes INVOISKY perfect for growing businesses with multiple departments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
