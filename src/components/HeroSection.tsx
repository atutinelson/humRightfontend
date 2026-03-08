import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection=()=>{
    return(
      <div className="bg-cover bg-center" style={{ backgroundImage: "url('bg.jpeg')" }} >
        <section className="py-12 md:py-20 text-center bg-[#057857]/80">
      <div className="container mx-auto px-4">
        {/* <p className=" font-medium  mb-4 text-green-400">Welcome to BetNode</p> */}
        
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto text-white">
          Expert Betting Tips & Predictions 
        </h1>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          Professional analysis for seasoned tipsters. Maximize your winning potential with data-driven insights 
        </p>
        
        <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 mb-8 justify-center items-center mx-auto">
          <Link href="/#free-tips">
            <Button variant={"default"} className="bg-[#f49e0b] w-48 text-black font-semibold">
              <div className="flex items-center gap-2 ">
                View Tips
                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                 height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </Button>
          </Link>
          <Link href="/gold">
            <Button variant={"outline"} className="bg-[#057857] w-48 text-white">
              Subscribe Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
      </div>
       
    );
}

export default HeroSection;