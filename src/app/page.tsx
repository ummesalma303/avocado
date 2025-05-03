import Banner from "@/components/Banner";
// import Card from "@/components/Card";
import Deals from "@/components/Deals";
import About from "@/components/Home/About";
import RecentFood from "@/components/Home/RecentFood";

export default function Home() {
  return (
    <div>
      
      <Banner/>
      {/* <Card/> */}
      <RecentFood/>
      <Deals/>
     <About/>
    </div>
  );
}
