const ContactBanner = () => {
  return (
    <section className="flex flex-col gap-6 items-center justify-center w-full bg-blue dark:bg-green dark:text-black border-y-2 dark:border-white p-10 m-10 animate-slide-right">
      <p className="text-xl sm:text-4xl font-extrabold">What are you waiting for?</p>
      <button className="text-xl sm:text-2xl border p-4 cursor-pointer hover:bg-white">Contact Me</button>
    </section>
  );
};

export default ContactBanner;
