"use client";

import { useRef, useEffect } from "react";

const ContactBanner = () => {
  const bannerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // create new intersection observer that watches for an element entering the viewport
    // once the element enters the viewport, add my custom animation utility class to its class
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-right")
        }
      });
    }, { threshold: 0 });

    const bannerNode = bannerRef.current;

    if (bannerNode) {
      observer.observe(bannerNode);
    }

    () => observer.disconnect();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="flex flex-col gap-6 items-center justify-center w-full bg-blue dark:bg-green dark:text-black border-y-2 dark:border-white p-10 m-10"
    >
      <p className="text-xl sm:text-4xl font-extrabold">
        What are you waiting for?
      </p>
      <button className="text-xl sm:text-2xl border p-4 cursor-pointer hover:bg-white">
        Contact Me
      </button>
    </section>
  );
};

export default ContactBanner;
