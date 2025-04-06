import PricingContent from "@/app/pricing/page-content";
import Background from "@/components/ui/background";

export const metadata = {
  title: "The Online Bio™ | Pricing",
  description: "Those who seek value, price comes second.",
};

export default function Pricing() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-10">
        <Background type="cover-02" />
      </div>
      <PricingContent />
    </div>
  );
}
