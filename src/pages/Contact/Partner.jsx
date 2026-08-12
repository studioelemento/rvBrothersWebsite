import ContactHero from "./components/ContactHero";
import ContactMethods from "./components/ContactMethods";
import PanIndiaPresence from "./components/PanIndiaPresence";
import BusinessEnquiry from "./components/BusinessEnquiry";
import ContactCTA from "./components/ContactCTA";

export default function Partner() {
  return (
    <div className="w-full bg-[#020617] text-slate-100">
      <ContactHero />
      <ContactMethods />
      <PanIndiaPresence />
      <BusinessEnquiry />
      <ContactCTA />
    </div>
  );
}