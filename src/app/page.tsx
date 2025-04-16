import Banner from "@/components/Banner";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Deals/>
      <Footer/>
    </div>
  );
}
