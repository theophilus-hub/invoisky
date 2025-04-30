import { Header } from "./header";
import { Hero } from "./hero";
import { Features } from "./features";
import { Pricing } from "./pricing";
import { FAQ } from "./faq";
import { Footer } from "./footer";

// Import components from section2
import { GrowthMetrics } from "../metrics/GrowthMetrics";
import { InvoicingAnalytics } from "../analytics/InvoicingAnalytics";
import { AnalyticsFeatures } from "../features/AnalyticsFeatures";
import { IntegrationsGrid } from "../features/IntegrationsGrid";
import { CustomerTestimonials } from "../testimonials/CustomerTestimonials";

// Import components from section3
import { NewsletterSignup } from "../newsletter/NewsletterSignup";
import { AIPromotion } from "../promotion/AIPromotion";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <Header />
      <Hero />
      <GrowthMetrics />
      <InvoicingAnalytics />
      <Features />
      <AnalyticsFeatures />
      <IntegrationsGrid />
      <CustomerTestimonials />
      <NewsletterSignup />
      <Pricing />
      <FAQ />
      <AIPromotion />
      <Footer />
    </div>
  );
}
