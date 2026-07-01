import Layout from "@/components/UI/Layout";
import Hero from "@/components/Home/Hero";
import SocialLinks from "@/components/Home/SocialLinks";
import EnterButton from "@/components/Home/EnterButton";
import LanguageSwitch from "@/components/Home/LanguageSwitch";
import ThemeToggle from "@/components/Home/ThemeToggle";

export default function Home() {
  return (
    <Layout title="Ernesto Guardado | Portfolio">
      <div className="relative flex flex-1 flex-col items-center justify-center px-4 py-16">
        <div className="absolute right-4 top-4 flex items-center gap-2">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center gap-6">
          <Hero />
          <SocialLinks />
          <EnterButton />
        </div>
      </div>
    </Layout>
  );
}
