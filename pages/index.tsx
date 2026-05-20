import AnnouncementBar from "../components/Announcementbar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";

export default function Home() {
  return (
    <>
      {/* Announcement bar — scrolls away naturally */}
      <AnnouncementBar />
 
      {/* Navbar — fixed, stays on screen after announcement scrolls out */}
      <Navbar />
 
      {/* 
        Offset = announcement bar (40px) + navbar (64px) = 104px
        This pushes content below the fixed navbar on first load 
      */}
      <div className="pt-16">
        <HeroSection />
      </div>
    </>
  );
}