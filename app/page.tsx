import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import MembersExperience from "@/components/MembersExperience";
import Gallery from "@/components/Gallery";
import EventCalendar from "@/components/EventCalendar";
import Testimonials from "@/components/Testimonials";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Events />
      <MembersExperience />
      <Gallery />
      <EventCalendar />
      <Testimonials />
      <JoinCTA />
      <Footer />
    </main>
  );
}
