import Image from "next/image"; // Make sure to import Image if you use it in other sections
import Hero from "../components/sections/Hero";
import HeroSimple from "../components/sections/HeroSimple";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Link from "next/link"; // Link is needed for buttons with href

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroSimple />

     
    </>
  );
}