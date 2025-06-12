"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

const ContactBanner = () => {
  const bannerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // create new intersection observer that watches for an element entering the viewport
    // once the element enters the viewport, add my custom animation utility class to its class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-right");
          }
        });
      },
      { threshold: 0 }
    );

    const bannerNode = bannerRef.current;

    if (bannerNode) {
      observer.observe(bannerNode);
    }

    () => observer.disconnect();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="flex flex-col gap-6 items-center justify-center w-full bg-blue dark:bg-green dark:text-black border-y-2 dark:border-white p-7 mt-10 mb-20"
    >
      <p className="text-xl sm:text-4xl font-bold text-shadow-light animate-slight-bounce">
        What are you waiting for?
      </p>
      <Link
        href="/contact"
        className="text-xl sm:text-2xl border-2 py-2 px-4 rounded-full cursor-pointer shadow-md shadow-gray-600 hover:bg-white hover:text-blue dark:hover:text-green"
      >
        Contact Me
      </Link>
    </section>
  );
};

export default ContactBanner;
