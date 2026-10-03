import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Chef from "@/components/Chef";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#1a1410]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Chef />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
