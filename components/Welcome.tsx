import Image from "next/image";

const Welcome = () => {
  return (
    <article className="flex flex-col md:flex-row gap-4 p-10 mx-20 my-10 border-1 rounded-lg">
      <section className="flex flex-col gap-2">
        <h1 className="text-component text-2xl">
          <span className="text-bracket">&lt;</span>
          Welcome
          <span className="text-bracket"> &#47;&gt;</span>
        </h1>
        <div>
          <div className="text-keyword">
            <span className="text-bracket">&lt;</span>p
            <span className="text-bracket">&gt;</span>
          </div>
          <div className="pl-5">
            My name is Tom Moosbrugger, and I'm a full-stack software developer.
            I thrive on making applications and websites
          </div>
          <div className="text-keyword">
            <span className="text-bracket">&lt;&#47;</span>p
            <span className="text-bracket">&gt;</span>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <Image
          src="/Headshot.jpg"
          alt="Picture of the author"
          width={300}
          height={300}
          className="rounded-lg object-cover min-w-[300px] min-h-[300px]"
        />
      </section>
    </article>
  );
};

export default Welcome;
