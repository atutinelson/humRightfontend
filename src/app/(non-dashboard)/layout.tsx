import Navbar from "@/components/navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";

const Layout =({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)=>{
    return (
    <div>
        <Navbar/>
        <main className={`h-full flex w-full flex-col`}
>
        {children}
        </main>
    </div>
    );
}

export default Layout;