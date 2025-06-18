'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { sendMessage } from '@/lib/utils';
import FormError from './FormError';
import SubmitSuccess from './SubmitSuccess';
import Loading from '@/public/other/loading.svg';

type FormInputs = {
  email: string;
  subjectLine: string;
  message: string;
};

const ContactForm = () => {
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      subjectLine: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setSubmissionError(null);

    const response = await sendMessage(data);

    if (response.success) {
      return;
    } else {
      setSubmissionError(response.message);

      reset();

      // throw error so that the isSubmitSuccessful evaluates to false
      throw new Error();
    }
  };

  const labelClass = 'flex flex-col font-bold gap-1';
  const inputClass =
    'border rounded-md dark:bg-gray-800 bg-white dark:text-white font-normal pl-2 py-2 outline-none focus:border-2 text-sm sm:text-xl';

  return (
    <>
      {isSubmitSuccessful ? (
        <SubmitSuccess onClick={() => reset()} />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 text-base sm:text-xl"
        >
          <header>
            {submissionError && (
              <>
                <p className="dark:text-red pb-4 text-lg font-extrabold text-red-800">
                  There was an error submitting your message. Please try again.
                </p>
                <p className="dark:text-red pb-4 text-lg font-extrabold text-red-800">
                  Error message: &quot;{submissionError}&quot;
                </p>
              </>
            )}
            <p className="mb-4 font-medium">
              I&apos;m always eager to connect and discuss new opportunities.
              Please get in touch using the form below.
            </p>
          </header>
          <label className={labelClass}>
            Email
            <input
              type="text"
              className={inputClass}
              placeholder="Enter your email..."
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
              rows={6}
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
            disabled={isSubmitting ? true : false}
            className={`${isSubmitting ? 'dark:hover:bg-green hover:bg-blue cursor-not-allowed' : 'cursor-pointer hover:bg-white'} hover:text-blue dark:bg-green dark:hover:text-green mt-4 flex items-center justify-center rounded-full border px-4 py-2 text-xl shadow-md shadow-gray-600 dark:text-black dark:shadow-gray-400`}
          >
            {isSubmitting ? (
              <Loading
                height={24}
                width={24}
                className="animate-spin text-center text-white"
              />
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
