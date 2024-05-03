"use client"
import NavBar from "@/components/navBar";
import Header from "@/components/header";
import BrowsingContet from "@/components/browsingContet";
import HowItWorks from "@/components/howItWorks";
import Features from "@/components/features";
import Contactus from "@/components/contactus";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <main className="flex text-white bg-black min-h-screen flex-col items-center justify-between">
      <NavBar />
      <Header />
      <HowItWorks />
      <BrowsingContet />
      <Features />
      <Contactus />
      <Footer />
    </main>
    </>
  );
}
