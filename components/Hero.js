import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center bg-cover bg-center text-white font-sans"
        style={{ backgroundImage: "url('/Hero_section.JPG')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Transform Your Driveway with Custom Concrete Printing
          </h1>
          <p className="mt-4 text-md md:text-xl lg:text-2xl">
            We specialize in decorative concrete solutions that enhance the
            beauty and value of your property.
          </p>
          <ScrollLink
            to="contact"
            smooth
            className="mt-8 inline-block bg-third md:font-semibold text-white px-6 py-3 md:px-8 md:py-4 md:text-lg rounded-xl md:rounded-2xl cursor-pointer"
          >
            Request a Free Quote
          </ScrollLink>
        </div>
      </section>
    </div>
  );
};

export default Hero;
