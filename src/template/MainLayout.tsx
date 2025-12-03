import { type PropsWithChildren } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="container mx-auto flex flex-col">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};
