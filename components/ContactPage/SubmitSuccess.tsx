import Link from "next/link";

interface SubmitSuccessProps {
  onClick: () => void;
}

const SubmitSuccess = ({ onClick }: SubmitSuccessProps) => {
  return (
    <article className="flex flex-col gap-4 text-xl">
      <h1 className="text-shadow-light text-3xl font-bold">
        Your message was sent successfully!
      </h1>
      <p>
        Thanks for reaching out. I will be in touch as soon as possible to
        discuss next steps.
      </p>
      <div className="flex flex-row gap-6">
        <Link
          href="/"
          className="bg-blue dark:bg-green hover:text-blue dark:hover:text-green mt-4 cursor-pointer rounded-full border px-4 py-2 text-xl shadow-md shadow-gray-600 hover:bg-white dark:text-black dark:shadow-gray-400"
        >
          Take Me Home
        </Link>
        <Link
          href="/contact"
          className="bg-blue dark:bg-green hover:text-blue dark:hover:text-green mt-4 cursor-pointer rounded-full border px-4 py-2 text-xl shadow-md shadow-gray-600 hover:bg-white dark:text-black dark:shadow-gray-400"
          onClick={onClick}
        >
          Send Another Message
        </Link>
      </div>
    </article>
  );
};

export default SubmitSuccess;