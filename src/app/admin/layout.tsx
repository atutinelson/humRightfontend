import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/sonner"



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
          <AppSidebar />
          <main className="p-5 flex-1">
            {children}
            <Toaster position="top-right" />
           </main>
        </SidebarProvider>
  )
}