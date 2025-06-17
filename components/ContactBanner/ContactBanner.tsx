'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

interface ContactBannerProps {
  threshold: number;
}

const ContactBanner = ({ threshold }: ContactBannerProps) => {
  const bannerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // create new intersection observer that watches for an element entering the viewport
    // once the element enters the viewport, add my custom animation utility class to its class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-right');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: threshold },
    );

    const bannerNode = bannerRef.current;

    if (bannerNode) {
      observer.observe(bannerNode);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <section
      ref={bannerRef}
      className="bg-blue dark:bg-green mt-10 mb-20 flex w-full flex-col items-center justify-center gap-6 border-y-2 p-7 opacity-0 dark:border-white dark:text-black"
    >
      <p className="text-shadow-light animate-slight-bounce text-xl font-bold sm:text-4xl">
        What are you waiting for?
      </p>
      <Link
        href="/contact"
        className="hover:text-blue dark:hover:text-green cursor-pointer rounded-full border-2 px-4 py-2 text-xl shadow-md shadow-gray-600 hover:bg-white sm:text-2xl"
      >
        Contact Me
      </Link>
    </section>
  );
};

export default ContactBanner;
