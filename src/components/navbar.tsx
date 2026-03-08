"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useGetLogoutMutation, useGetMeQuery, useGetplansQuery, useGetSessionQuery } from "@/state/api";

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { NAVBAR_HEIGHT } from "@/lib/constants";

const Navbar = () => {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [premiumOpen, setPremiumOpen] = useState(false);
    const [jackpotOpen, setJackpotOpen] = useState(false);
    const toggleSubmenu = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setter(prev => !prev);
    };
    const { data: session, isLoading, isError } = useGetSessionQuery();
    const [Logout, { isLoading: isLogoutLoading }] = useGetLogoutMutation();
    const {data:plans, isLoading:planLoading, isError:planError} = useGetplansQuery();
    // session may be null when not logged in
    console.log("logged in session", session);
    return (
        <>
            <nav className="bg-[#057857] backdrop-blur-sm sticky top-0 z-50"
            //  style={{ height: `${NAVBAR_HEIGHT}px` }}
             >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold leading-none inline-flex items-center">
                            <img src="/bg.jpeg" alt="BetNode Logo" className="h-8 w-auto mr-2" />
                            <span className="text-white">HumRight</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/" className="font-medium text-white hover:text-green-400">
                                Home
                            </Link>

                            {/* Premium Tips */}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1 font-medium text-white hover:text-green-400">
                                  Premium Tips
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="bg-[#057857] border border-gray-700">
                                {planLoading && <p className="px-4 py-2 text-white">Loading...</p>}
                                {planError && <p className="px-4 py-2 text-red-500">Failed to load</p>}
                                {!planLoading && !planError && plans?.data?.map((plan: any) => {
                                  const slug = plan.name.toLowerCase().replace(/\s+/g, '-');
                                  return (
                                    <DropdownMenuItem 
                                      key={plan.id} 
                                      onSelect={() => router.push(`/${slug}`)}
                                      asChild>
                                      <a className="text-white capitalize">
                                        {plan.name} Plan
                                      </a>
                                    </DropdownMenuItem>
                                  );
                                })}
                              </DropdownMenuContent>
                            </DropdownMenu>


                             {/* Premium Tips */}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1 font-medium text-white hover:text-green-400">
                                  Jackpots
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="bg-[#057857] border border-gray-700">
                                <DropdownMenuItem asChild>
                                  <Link href="/sportpesa" className="text-white">SportPesa Jackpot</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link href="/betika" className="text-white">Betika Jackpot</Link>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>

                            <Link href="#" className="font-medium text-white hover:text-green-400">FindMyTip</Link>
                            
                            {!session?.user ? (
                              <>
                                 <Link href="/login">
                                 <Button variant={"outline"} className="bg-[#057857] w-full text-white" >
                                  <div>Login</div>
                                 </Button>
                                 </Link>
                                 <Link href="/signup">
                                 <Button variant={"outline"} className="bg-[#057857] w-full text-white">
                                  <div>Register </div>
                                  </Button>
                                  </Link>
                              </>
                            ) : (
                              <div>
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <div className="flex  items-center gap-1">
                                <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-white font-bold">
                                    {session.user.name.slice(0, 2).toUpperCase()}
                                </div>
                                
                                </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-[#057857]">
                                    {
                                        session.user.role === "ADMIN"?
                                        <Link href={"/admin"}>
                                        <DropdownMenuItem 
                                        
                                        className="text-white font-semibold">Dashboard</DropdownMenuItem>
                                        </Link>:null
                                    }
                                    <DropdownMenuItem 
                                    className="text-white font-semibold" 
                                    onClick={()=>{Logout();
                                    }}>
                                        <LogOutIcon className="text-white font-semibold"/>
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                              </div>
                            )
                        }
                            
                        </div>
                        {/* Mobile Menu Button */}
                        <button className="md:hidden" onClick={()=> setSidebarOpen((prev)=> !prev) }>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        


                    </div>
                </div>
            </nav>
          {/* {{-- Overlay --}} */}

       {sidebarOpen && (
        <div className="fixed top-0 left-0 bottom-0 bg-[#057857] w-3/4 max-h-screen z-40 md:hidden flex flex-col justify-between">
        <nav className="px-4 py-6 space-y-4 text-white">

        <a href="/" className="block font-medium">Home</a>

        {/* {{-- Premium Tips submenu --}} */}
        <div>
            <button onClick={()=> toggleSubmenu(()=>{setPremiumOpen((prev)=>!prev)
             })}
                    className="w-full flex items-center justify-between font-medium">
                Premium Tips
                <svg className="w-4 h-4 transform transition-transform" id="premium-icon"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M19 9l-7 7-7-7"/>
                </svg>
            </button>

            {premiumOpen&&
            (<div id="premium-submenu" className="mt-2 ml-4 space-y-2">
                {planLoading && <p className="text-sm text-gray-300">Loading...</p>}
                {planError && <p className="text-sm text-red-300">Failed to load</p>}
                {!planLoading && !planError && plans?.data?.map((plan: any) => {
                  const slug = plan.name.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <Link 
                      key={plan.id} 
                      href={`/${slug}`} 
                      className="block text-sm text-gray-300 capitalize"
                    >
                      {plan.name} Plan
                    </Link>
                  );
                })}
            </div>)}
        </div>

        {/* {{-- Jackpots submenu --}} */}
        <div>
            <button  onClick={()=> toggleSubmenu(()=>{setJackpotOpen((prev)=>!prev)
             })}
                    className="w-full flex items-center justify-between font-medium">
                Jackpots
                <svg className="w-4 h-4 transform transition-transform" id="jackpot-icon"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M19 9l-7 7-7-7"/>
                </svg>
            </button>

            {jackpotOpen && (
                <div id="jackpot-submenu" className="mt-2 ml-4 space-y-2">
                    <Link href="/sportpesa" className="block text-sm text-gray-300">SportPesa Jackpot</Link>
                    <Link href="/betika" className="block text-sm text-gray-300">Betika Jackpot</Link>
                </div>
            )}

        </div>

        <a href="#" className="block font-medium">FindMyTip</a>
        <a href="#" className="block font-medium">Blog</a>
        </nav>
     <div className="mb-5 container">
        <div className="h-0.5 w-full  bg-[#185848]/80"></div>
        <div className="flex items-center mx-3 mt-2 ">
          {!session?.user ? (
            <div className="flex space-x-4 ">
              <Link href="/login">
              <Button variant={"outline"} className="bg-[#057857] w-full text-white" >
                <div>
                  <LogIn className="inline-block mr-2 w-4 h-4" />
                  Login
                </div>
              </Button>
              </Link>
              <Link href="/signup">
              <Button variant={"outline"} className="bg-[#057857] w-full text-white">
                <div>
                  <LogIn className="inline-block mr-2 w-4 h-4" />
                  Register
                </div>
              </Button>
              </Link>
            </div>
          ) : (
           <div className="flex flex-col space-y-4">
            <div className="flex  items-center gap-1">
                <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-white font-bold">
                     {session.user.name.slice(0, 2).toUpperCase()}
                 </div>
                <div className="flex flex-col">
                     <p className="text-sm text-white">{session.user.name}</p>
                     <p className="text-xs text-white">{session.user.email}</p>
                </div>            
            </div>
            <div className="">
                <Button variant={"outline"}  className="w-full bg-[#057857] "
                 onClick={()=>{Logout()}}>
                    <LogOutIcon className="w-4 h-4 text-white"/>
                    <p className="text-white font-medium">Logout</p>
                </Button>
            </div>
           </div> 
            
          )}
        </div>
     </div>
    </div>
       )}

           
  </>
    );
};

export default Navbar;
