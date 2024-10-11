import Head from "next/head";
import { useState } from "react";
import Contact from "@/components/Contact";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import logo from "../public/custom-logo.png";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-primary relative text-secondary min-h-screen">
      <Head>
        {/* Basic SEO */}
        <title>
          Custom Concrete Driveways - Printing & Installation Specialists
        </title>
        <meta
          name="description"
          content="We specialize in custom concrete driveways, stamped concrete, and pattern printing. With expert craftsmanship and quality materials, we deliver beautiful, durable driveways that enhance your property."
        />

        <meta
          name="keywords"
          content="custom driveway, concrete printing, decorative concrete, stamped concrete, man & digger hire, pressure washing"
        />
        <link rel="canonical" href="https://yourwebsite.com/" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Concrete Driveways - Custom Concrete Printing Specialist"
        />
        <meta
          property="og:description"
          content="Transform your driveway with custom concrete printing. We specialize in unique, durable, and beautiful driveways."
        />
        <meta property="og:image" content="/custom-logo.png" />
        <meta property="og:url" content="https://yourwebsite.com/" />

        <meta name="facebook:card" content="summary_large_image" />
        <meta
          name="facebook:title"
          content="Concrete Driveways - Custom Concrete Printing Specialist"
        />
        <meta
          name="facebook:description"
          content="Transform your driveway with custom concrete printing. We specialize in unique, durable, and beautiful driveways."
        />
        <meta name="facebook:image" content="/icons/facebook.png" />

        <meta name="instagram:card" content="summary_large_image" />
        <meta
          name="instagram:title"
          content="Concrete Driveways - Custom Concrete Printing Specialist"
        />
        <meta
          name="instagram:description"
          content="Transform your driveway with custom concrete printing. We specialize in unique, durable, and beautiful driveways."
        />
        <meta name="instagram:image" content="/icons/instagram.png" />

        <meta name="tiktok:card" content="summary_large_image" />
        <meta
          name="tiktok:title"
          content="Concrete Driveways - Custom Concrete Printing Specialist"
        />
        <meta
          name="tiktok:description"
          content="Transform your driveway with custom concrete printing. We specialize in unique, durable, and beautiful driveways."
        />
        <meta name="tiktok:image" content="/icons/tiktok.png" />

        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Custom Driveways",
            "description": "We specialize in custom concrete driveways, stamped concrete, and concrete printing.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2 Clarkes Croft",
              "addressLocality": "Bury",
              "postalCode": "BL9 7NR",
              "addressCountry": "UK"
            },
            "telephone": "+447925707600",
            "url": "https://yourwebsite.com",
            "image": "https://yourwebsite.com/custom-logo.png"
          }`}
        </script>

        {/* Sitemap for SEO */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </Head>

      <Navbar open={sidebarOpen} setOpen={setSidebarOpen} />

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="absolute z-20 top-16 right-5 left-5  text-center md:top-28">
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={180}
          className="mx-auto md:w-[200px] "
          priority
        />
      </div>

      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <SocialMedia />
    </div>
  );
}
