import AboutContent from "@/app/about/page-content";

export const metadata = {
  title: "The Online Bio™ | About",
  description: "F*ck AI and your cheap website templates.",
};

export default function About() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AboutContent />
    </div>
  );
}
