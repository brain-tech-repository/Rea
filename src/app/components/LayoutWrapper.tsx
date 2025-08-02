'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './sidebar';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noSidebarPaths = ['/login', '/register', '/forgot','/ac', '/','/pages/page6'];
  const showSidebar = !noSidebarPaths.includes(pathname);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sans">
      {showSidebar && <Sidebar />}
      <main className="flex-1 overflow-auto p-2">{children}</main>
    </div>
  );
}
