import { Toaster } from "react-hot-toast";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import RecentWorks from "./components/RecentWorks";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <div><Toaster /></div>
      <Hero />
      <CaseStudies />
      <Testimonials />
      <RecentWorks />
      <Contact />
    </div>
  );
}
