import MenuItem from "../comps/MenuItem";
import Section1 from "../comps/Section1";
import Section2 from "../comps/Section2";
import Section3 from "../comps/Section3";
import Section4 from "../comps/Section4";
import Section5 from "../comps/Section5";
import Section6 from "../comps/Section6";
import Section7 from "../comps/Section7";
import Footer from "../comps/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <MenuItem />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </div>
    </main>
  );
}
