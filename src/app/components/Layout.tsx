import { Outlet } from "react-router";
import { TopBar } from "./TopBar";
import { MarqueeBar } from "./MarqueeBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BookingModal } from "./BookingModal";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#ffffff" }}>
      <TopBar />
      <MarqueeBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BookingModal />
    </div>
  );
}
