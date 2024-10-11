import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        e.target,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("There was an error sending your message.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-secondary text-white font-sans">
      <div className="container mx-auto text-center md:text-left px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-4">
              At Custom Concrete Driveways, we specialize in providing
              high-quality <strong>decorative concrete driveways</strong> that
              are durable, stylish, and tailored to your needs. Whether you need{" "}
              <strong>stamped concrete</strong>,{" "}
              <strong>pattern printed concrete</strong>, or a complete custom
              driveway solution, we&apos;ve got you covered. Contact us today
              for a free estimate and discover how we can transform your
              driveway with modern, low-maintenance concrete solutions.
            </p>
            <p className="mt-4">
              Our team offers expert services including{" "}
              <strong>man and digger hire</strong>,{" "}
              <strong>pressure washing</strong>, and{" "}
              <strong>concrete fitting</strong> to help bring your dream
              driveway to life.
            </p>
          </div>

          {/* Form */}
          <div className="md:w-1/2 md:pl-8">
            <form onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                className="w-full p-4 rounded bg-white text-black"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                className="w-full p-4 rounded bg-white text-black"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                className="w-full p-4 rounded bg-white text-black"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full p-4 bg-third rounded text-white"
              >
                Submit
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 text-center md:text-left">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@custom-driveways.co.uk"
                  className="underline"
                >
                  info@custom-driveways.co.uk
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+447925707600" className="underline">
                  +44 7925 707600
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
