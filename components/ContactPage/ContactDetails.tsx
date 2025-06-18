import LinkedIn from '@/public/other/linkedin.svg';
import GitHub from '@/public/other/github.svg';
import Email from '@/public/other/email.svg';

const ContactDetails = () => {
  const iconClass = 'h-8 w-8 md:h-16 md:w-16 fill-black dark:fill-white';

  return (
    <section className="text-sm sm:text-xl">
      <header>
        <p className="mb-6 font-medium">
          If contact forms aren&apos;t your thing, feel free to reach out to me
          on these other platforms:
        </p>
      </header>
      <section className="flex flex-col items-baseline justify-center">
        <div className="flex flex-row items-center gap-2">
          <Email fill="white" className={iconClass} />
          <p className="text-xs sm:text-xl">: tamoosbrugger@gmail.com</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <GitHub className={`${iconClass} dark:stroke-white`} />
          <p className="text-xs sm:text-xl">: github.com/Tom-Moosbrugger</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <LinkedIn className={iconClass} />
          <p className="text-xs sm:text-xl">: in/tom-moosbrugger/</p>
        </div>
      </section>
    </section>
  );
};

export default ContactDetails;
