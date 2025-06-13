'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import FormError from './FormError';
import Link from 'next/link';

type FormInputs = {
  email: string;
  subjectLine: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      subjectLine: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // reset();
  };

  const labelClass = 'flex flex-col font-bold gap-1';
  const inputClass =
    'border rounded-md dark:bg-gray-800 bg-white dark:text-white font-normal pl-2 py-2 outline-none focus:border-2 text-sm sm:text-xl';

  console.log(isSubmitSuccessful);

  return (
    <>
      {isSubmitSuccessful ? (
        <article className="flex flex-col gap-4 text-xl">
          <h1 className="dark:text-shadow-dark text-shadow-light text-2xl font-bold">
            Your message was sent successfully!
          </h1>
          <p>
            Thanks for reaching out. I will be in touch as soon as possible to
            discuss next steps.
          </p>
          <div className="flex flex-row gap-6">
            <Link
              href="/"
              className="hover:text-blue dark:hover:text-green mt-4 cursor-pointer rounded-full border px-4 py-2 text-xl shadow-md shadow-gray-600 hover:bg-white dark:shadow-gray-400"
            >
              Take Me Home
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue dark:hover:text-green mt-4 cursor-pointer rounded-full border px-4 py-2 text-xl shadow-md shadow-gray-600 hover:bg-white dark:shadow-gray-400"
              onClick={() => reset}
            >
              Send Another Message
            </Link>
          </div>
        </article>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 text-xl"
        >
          <header>
            <p className='font-medium mb-4'>I&apos;m always eager to connect and discuss new opportunities. Please get in touch using the form below. </p>
          </header>
          <label className={labelClass}>
            Email
            <input
              type="text"
              className={inputClass}
              placeholder="Enter your email address..."
              {...register('email', {
                required: { value: true, message: 'Email is required' },
                minLength: {
                  value: 5,
                  message: 'Email addresses must be at least 5 characters long',
                },
                maxLength: {
                  value: 254,
                  message:
                    'Email addresses cannot be longer than 254 characters',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            <FormError message={errors.email?.message} />
          </label>
          <label className={labelClass}>
            Subject Line
            <input
              type="text"
              className={inputClass}
              placeholder="Enter the subject line..."
              {...register('subjectLine', {
                required: { value: true, message: 'Subject Line is required' },
                minLength: {
                  value: 3,
                  message: 'Subject Lines must be at least 3 characters long',
                },
                maxLength: {
                  value: 100,
                  message: 'Subject Lines cannot be longer than 100 characters',
                },
              })}
            />
            <FormError message={errors.subjectLine?.message} />
          </label>
          <label className={labelClass}>
            Message
            <textarea
              className={inputClass}
              placeholder="Type your message here..."
              rows={10}
              {...register('message', {
                required: { value: true, message: 'Message is required' },
                minLength: {
                  value: 20,
                  message: 'Message must be at least 20 characters long',
                },
                maxLength: {
                  value: 2000,
                  message: 'Message cannot be longer than 2,000 characters',
                },
              })}
            />
            <FormError message={errors.message?.message} />
          </label>
          <button
            type="submit"
            className="hover:text-blue dark:bg-green dark:text-black dark:hover:text-green mt-4 cursor-pointer rounded-full border px-4 py-2 text-xl shadow-md shadow-gray-600 hover:bg-white dark:shadow-gray-400"
          >
            Send Message
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
