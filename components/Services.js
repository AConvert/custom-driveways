import React from "react";

const Services = () => {
  const services = [
    {
      title: "Man & Digger Hire",
      description:
        "Reliable equipment hire and expert operators for your driveway projects.",
    },
    {
      title: "Pattern Print Concrete Fitting",
      description:
        "Durable, decorative concrete designed to give your driveway a unique look.",
    },
    {
      title: "Pressure Washing",
      description: "Keep your",
    },
  ];

  return (
    <div>
      <section id="services" className="py-20 bg-primary font-sans">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center">
            Our Concrete Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8 ">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-4 shadow-xl rounded-xl md:rounded-2xl md:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
