import Image from "next/image";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
      <main className="">
        <Navigation/>
        <HeroSection/>
      </main>
  );
}
