import Image from 'next/image';

interface AboutMeTileProps {
  src: string;
  alt: string;
  position: 'justify-start' | 'justify-end';
  text: string;
  textFirst: boolean;
}

const AboutMeTile = ({
  src,
  alt,
  position,
  textFirst,
  text,
}: AboutMeTileProps) => {
  return (
    <div
      className={`flex w-full flex-col items-center gap-2 md:gap-6 md:flex-row ${position}`}
    >
      {textFirst ? (
        <>
          <p className='order-2 md:order-0'>{text}</p>
          <Image
            src={src}
            width={300}
            height={300}
            alt={alt}
            className="rounded-lg border-2 border-black object-cover dark:border-white"
          />
        </>
      ) : (
        <>
          <Image
            src={src}
            width={300}
            height={300}
            alt={alt}
            className="rounded-lg border-2 border-black object-cover dark:border-white"
          />
          <p>{text}</p>
        </>
      )}
    </div>
  );
};

export default AboutMeTile;
