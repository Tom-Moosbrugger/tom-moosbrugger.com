'use client';

import ContactForm from '@/components/ContactPage/ContactForm';
import ComponentElement from '@/components/Elements/ComponentElement';
import { useState } from 'react';

const Contact = () => {
  const [tab, setTab] = useState('tab1');

  const tabClass = 'border bg-';

  return (
    <main className="flex justify-center px-20 py-10">
      <article className="bg-blue w-full max-w-4xl min-w-sm rounded-lg border dark:bg-black">
        <header className="flex flex-row items-center">
          <h2
            onClick={() => setTab('tab1')}
            className={`text-shadow-light box-content flex flex-1 cursor-pointer items-center justify-center rounded-tl-lg pt-4 pb-2 text-xl font-bold sm:text-3xl ${tab === 'tab1' ? '' : 'bg-lightblue border-r border-b opacity-30 dark:bg-gray-400'}`}
          >
            Contact Form
            <br />
          </h2>
          <h2
            onClick={() => setTab('tab2')}
            className={`text-shadow-light box-content flex flex-1 cursor-pointer items-center justify-center rounded-tr-lg pt-4 pb-2 text-xl font-bold sm:text-3xl ${tab === 'tab2' ? '' : 'bg-lightblue border-b border-l opacity-30 dark:bg-gray-400'}`}
          >
            {' '}
            Contact Details
            <br />
          </h2>
        </header>
        <div className="px-10 py-10">
          {tab === 'tab1' ? <ContactForm /> : <div>Contact Details</div>}
        </div>
      </article>
    </main>
  );
};

export default Contact;

/*

I want to have a simple contact form that sends an email upon form submission
It should have the following fields: email, subject line, message
possibly also a captcha to avoid spam.

*/
