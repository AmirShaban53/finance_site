import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Companies from "./components/companies";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Mobile from "./components/mobile";

function App() {
  return (
    <div className="text-neutral-800">
      <Navbar />
      <Hero />
      <Features />
      <Companies />
      <Testimonials />
      <Mobile />
      <Footer />
    </div>
  );
}

export default App;
