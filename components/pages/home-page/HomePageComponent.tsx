"use client";

import Header from "@/components/header/Header";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"));
const Information = dynamic(() => import("@/components/Information"));

export default function HomePageComponent() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Information></Information>
    </>
  );
}
