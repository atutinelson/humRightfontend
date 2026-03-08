import { Button } from "./ui/button";

const ValueBet =()=>{
  return(  <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 bg-white z-10 max-w-4xl items-center">
         <h1 className="text-xl md:text-2xl font-bold text-[#057857] text-left">Value tips</h1>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button className="bg-[#057857]  w-40 h-20">SportPesa Jackpot</Button>
          <Button className="bg-[#057857] w-40 h-20">Betika Jackpot</Button>
          <Button className="bg-[#057857] w-40 h-20">SportPesa Jackpot</Button>
          <Button className="bg-[#057857] w-40 h-20">Betika Jackpot</Button>
         </div>
        </div>

    </section>);
}

export default ValueBet;