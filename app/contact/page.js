import ContactContent from "@/app/contact/page-content";
import Background from "@/components/ui/background";

export const metadata = {
  title: "The Online Bio™ | Contact",
  description: "We would love to hear from you!",
};

export default function Contact() {
  return (
    <>
      <div className="relative min-h-screen bg-black text-white">
        <div className="fixed inset-0 z-10">
          <Background type="cover-03" />
        </div>
        <ContactContent />
      </div>
    </>
  );
}
