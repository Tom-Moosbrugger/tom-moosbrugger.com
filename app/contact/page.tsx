'use client';

import ContactForm from '@/components/ContactPage/ContactForm';
import ContactDetails from '@/components/ContactPage/ContactDetails';
import { useState } from 'react';

const Contact = () => {
  const [tab, setTab] = useState('tab1');

  const baseHeaderClass =
    'text-shadow-light box-content flex flex-1 cursor-pointer items-center justify-center p-4 text-base sm:text-xl font-bold md:text-3xl';

  return (
    <main className="flex justify-center px-20 py-10">
      <article className="bg-blue w-full max-w-4xl min-w-sm rounded-lg border dark:bg-black">
        <header className="flex flex-row items-center">
          <h2
            onClick={() => setTab('tab1')}
            className={`${baseHeaderClass} rounded-tl-lg ${tab === 'tab1' ? '' : 'bg-lightblue border-r border-b opacity-30 dark:bg-gray-400'}`}
          >
            Contact Form
            <br />
          </h2>
          <h2
            onClick={() => setTab('tab2')}
            className={`${baseHeaderClass} rounded-tr-lg ${tab === 'tab2' ? '' : 'bg-lightblue border-b border-l opacity-30 dark:bg-gray-400'}`}
          >
            {' '}
            Contact Details
            <br />
          </h2>
        </header>
        <div className="px-10 py-10">
          {tab === 'tab1' ? <ContactForm /> : <ContactDetails />}
        </div>
      </article>
    </main>
  );
};

export default Contact;
