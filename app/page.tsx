import { EmergencyBar } from "@/components/emergency-bar"
import { QuickContactBar } from "@/components/quick-contact-bar"
import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { Services } from "@/components/services"
import { PricingTable } from "@/components/pricing-table"
import { MaintenancePlans } from "@/components/maintenance-plans"
import { AddOns } from "@/components/add-ons"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <EmergencyBar />
      <QuickContactBar />
      <Hero />
      <ValueProps />
      <Services />
      <PricingTable />
      <MaintenancePlans />
      <AddOns />
      <Testimonials />
      <FAQ />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
