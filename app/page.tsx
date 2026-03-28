import Image from "next/image";
import Navbar from "@/components/Navbar";
import Topics from "@/components/Topics";
import About from "@/components/About";
import Insights from "@/components/Insights";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div >
       {/* Topics section */}
       <Navbar />
       <Hero />
       <Topics />
       <About />
       <Insights />
    </div>
  );
}


{/* <div >
<Image
  className="dark:invert"
  src="/next.svg"
  alt="Next.js logo"
  width={100}
  height={20}
  priority
/>
</div> */}