import { useState, useCallback } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Bridal from "@/components/Bridal";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import WhyUs from "@/components/WhyUs";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingSocial from "@/components/FloatingSocial";

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <div className="relative min-h-screen bg-cream overflow-x-hidden">
      <ParticleBackground />
      <Header onBookClick={openBooking} />
      <main className="relative">
        <Hero />
        <Stats />
        <Services />
        <Bridal />
        <Gallery />
        <Reviews />
        <WhyUs />
        <Contacts />
      </main>
      <Footer />
      <FloatingSocial />
      <BookingModal isOpen={bookingOpen} onClose={closeBooking} />
    </div>
  );
}

export default App;
