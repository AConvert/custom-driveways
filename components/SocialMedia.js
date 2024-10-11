import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  const socialMedia = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61555893165686",
      icon: "/icons/facebook.png",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/customdriveways?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==",
      icon: "/icons/instagram.png",
    },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/@custom.driveways?_t=8pxPgG9sae0&_r=1",
      icon: "/icons/tiktok.png",
    },
  ];

  return (
    <div>
      <section className="py-10 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Follow Us</h2>
          <div className="flex justify-center space-x-4 mt-4">
            {socialMedia.map((social) => (
              <Link
                href={social.link}
                aria-label={social.name}
                target="_blank"
                key={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={32}
                  height={32}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
