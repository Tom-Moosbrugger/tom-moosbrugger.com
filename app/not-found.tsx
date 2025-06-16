import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-10 px-20 py-20 text-xl md:px-50 md:text-4xl">
      <Image
        src="/other/crying.gif"
        alt="animated image of a person crying"
        width={400}
        height={400}
        className="object-fit rounded-full"
      />
      <h1>
        {' '}
        <span className="font-extrabold">Whoops!</span> It looks like the page
        you were looking for doesn&apos;t exist...
      </h1>
      <Link
        href="/"
        className="hover:text-blue dark:bg-green dark:hover:text-green w-1/2 min-w-sm flex cursor-pointer items-center justify-center rounded-full border px-4 py-2 text-xl shadow-md shadow-gray-600 hover:bg-white dark:text-black dark:shadow-gray-400"
      >
        Take Me Home
      </Link>
    </main>
  );
};

export default NotFound;
